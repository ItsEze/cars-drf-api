# from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from account.serializers import UserProfileSerializer
from django.contrib.auth.models import User
from account.models import UserProfile
from models import Advertisement, Car, CarModel

class CarModelSerializer(serializers.ModelSerializer):

   class Meta:
      model = CarModel
      fields = ('make', 'model')

class CarSerializer(serializers.ModelSerializer):
   car_models = CarModelSerializer(many=True)

   class Meta:
      model = Car
      fields = ('number_of_owners', 'registration_number', 'manufacture_year', 'number_of_doors', 'mileage', 'car_model_id')

class UserSerializer(serializers.ModelSerializer):
   
   class Meta:
      model = User
      fields = ('email', 'password')

class UserProfileSerializer(serializers.ModelSerializer):
   user = UserSerializer(many=True)

   class Meta:
      model = UserProfile
      fields = ('account_id', 'first_name', 'last_name', 'street_name', 'street_number', 'zip_code', 'city')

class AdvertisementSerializer(serializers.ModelSerializer):
   user_profile = UserProfileSerializer(many=True)
   cars = CarSerializer(many=True)

   class Meta:
      model = Advertisement
      fields = ('advertisement_date', 'seller_account_id', 'car_id')
      