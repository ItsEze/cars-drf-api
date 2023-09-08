from rest_framework import serializers
from django.contrib.auth.models import User
from account.models import UserProfile
from .models import Advertisement, Car, CarModel

class CarModelSerializer(serializers.ModelSerializer):

   class Meta:
      model = CarModel
      fields = ('pk', 'make', 'model')

class CarSerializer(serializers.ModelSerializer):
   car_model = CarModelSerializer()

   class Meta:
      model = Car
      fields = ('pk', 'number_of_owners', 'registration_number', 'manufacture_year', 'number_of_doors', 'mileage', 'car_model')

   number_of_owners = serializers.IntegerField(required=False)
   manufacture_year = serializers.IntegerField(required=False)
   mileage = serializers.IntegerField(required=False)
   car_model = CarModelSerializer(required=False)

class UserProfileSerializer(serializers.ModelSerializer):

   class Meta:
      model = UserProfile
      fields = ('street_name', 'street_number', 'zip_code', 'city')


class UserSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(source='userprofile')

    class Meta:
        model = User
        fields = ('pk', 'username', 'user_profile')

class AdvertisementSerializer(serializers.ModelSerializer):
   seller_account = UserSerializer(read_only=True)
   car = CarSerializer()

   class Meta:
      model = Advertisement
      fields = ('pk', 'advertisement_date', 'seller_account', 'car')

   def field_validator(self, car_data):
      mileage = car_data.get('mileage')
      car_model = car_data.get('car_model')
      number_of_owners = car_data.get('number_of_owners')
      manufacture_year = car_data.get('manufacture_year')
      if car_model is None or number_of_owners is None or manufacture_year is None or mileage is None:
         raise serializers.ValidationError("Please input the following fields: mileage, car make, car model, number of owners, and manufacture year.")
      return

   def create(self, validated_data):

      seller = self.context['request'].user
      car_data = validated_data.pop('car')
      registration_number = car_data['registration_number']

      try:
         car = Car.objects.get(registration_number=registration_number)
      except Car.DoesNotExist:
         self.field_validator(car_data)
         car_model_data = car_data.pop('car_model')
         car_model, _ = CarModel.objects.get_or_create(**car_model_data)
         car = Car.objects.create(car_model=car_model, **car_data)
      else:
         if car_data.get('mileage', car.mileage) < car.mileage:
            raise serializers.ValidationError("Mileage must be greater than or equal to the current value.")
         if car_data.get('number_of_owners', car.number_of_owners) < car.number_of_owners:
            raise serializers.ValidationError("Number of owners must be greater than or equal to the current value.")
         car.number_of_owners = car_data.get('number_of_owners', car.number_of_owners)
         car.mileage = car_data.get('mileage', car.mileage)
         car.save() 

      advertisement = Advertisement.objects.create(car=car, seller_account=seller, **validated_data)

      return advertisement