from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import UserProfile
        
class SignupSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id']
        
class UserProfileSerializer(ModelSerializer):
    
    class Meta:
        model = UserProfile
        fields = '__all__'
        
    def update(self, instance, validated_data):
        
        instance.user=self.request.user,
        instance.street_name = validated_data.get('street_name', instance.street_name)
        instance.street_number = validated_data.get('street_number', instance.street_number)
        instance.zip_code = validated_data.get('zip_code', instance.zip_code)
        instance.city = validated_data.get('city', instance.city)
        instance.save()
        return instance