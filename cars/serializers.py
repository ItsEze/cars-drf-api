from rest_framework import serializers
from django.contrib.auth.models import User
from account.models import UserProfile
from .models import Advertisement, Car, CarModel

class CarModelSerializer(serializers.ModelSerializer):

   class Meta:
      model = CarModel
      fields = ('make', 'model')

class CarSerializer(serializers.ModelSerializer):
   car_model = CarModelSerializer()

   class Meta:
      model = Car
      fields = ('number_of_owners', 'registration_number', 'manufacture_year', 'number_of_doors', 'mileage', 'car_model')


class UserProfileSerializer(serializers.ModelSerializer):

   class Meta:
      model = UserProfile
      fields = ('street_name', 'street_number', 'zip_code', 'city')


class UserSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(source='userprofile')

    class Meta:
        model = User
        fields = ('username', 'user_profile')

class AdvertisementSerializer(serializers.ModelSerializer):
   seller_account = UserSerializer()
   car = CarSerializer()

   class Meta:
      model = Advertisement
      fields = ('pk', 'advertisement_date', 'seller_account', 'car')
      