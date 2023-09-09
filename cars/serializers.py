from rest_framework import serializers
from django.contrib.auth.models import User
from account.models import UserProfile
from .models import Advertisement, Car, CarModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'id'
class CarModelSerializer(serializers.ModelSerializer):
   class Meta:
      model = CarModel
      fields = '__all__'
      
class CarSerializer(serializers.ModelSerializer):
   car_model_id = CarModelSerializer(required=False)
   user_account = UserSerializer()
   class Meta:
      model = Car
      fields = '__all__'
      

class AdvertisementSerializer(serializers.ModelSerializer):
   seller_account = UserSerializer()
   car = CarSerializer()
   class Meta:
      model = Advertisement
      fields = '__all__'

   