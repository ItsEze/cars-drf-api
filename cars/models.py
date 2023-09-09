from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

# car model
class CarModel(models.Model):
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=25)
    
    def __str__(self):
        return f"{self.make} - {self.model}"
# car
class Car(models.Model):
    number_of_owners = models.IntegerField()
    registration_number = models.CharField(max_length=255)
    manufacture_year = models.IntegerField()
    number_of_doors = models.IntegerField(default=5)
    mileage = models.IntegerField()
    car_model = models.ForeignKey(CarModel, on_delete=models.PROTECT)
    
    def __str__(self):
        return f"{self.manufacture_year} - {self.car_model.make} - {self.car_model.model} - Reg Number:{self.registration_number}"


# advertisement
class Advertisement(models.Model):
    advertisement_date = models.DateField(auto_now=True)
    seller_account = models.ForeignKey(User, on_delete=models.PROTECT)
    car = models.ForeignKey(Car, on_delete=models.PROTECT)