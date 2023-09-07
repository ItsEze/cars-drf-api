from django.db import models
from django.contrib.auth.models import User
# Create your models here.
# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    street_name = models.CharField(max_length=30)
    street_number = models.CharField(max_length=30)
    zip_code = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
