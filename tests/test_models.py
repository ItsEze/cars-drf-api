from django.test import TestCase
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from cars.models import CarModel, Car, Advertisement

class CarModelTest(TestCase):
    def test_01_create_car_model_instance(self):
        car_model = CarModel(make='Toyota', model='Camry')
        car_model.save()
        try:
            car_model.full_clean()
            self.assertIsNotNone(car_model)
        except ValidationError as e:
            self.fail()

class CarTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.car_model = CarModel.objects.create(make='Toyota', model='Camry')
        self.car = Car.objects.create(
            number_of_owners=1,
            registration_number='ABC123',
            manufacture_year=2020,
            number_of_doors=4,
            mileage=5000,
            car_model=self.car_model,
        )

    def test_01_create_car_instance(self):
        expected_str = '2020 - Toyota - Camry - Reg Number:ABC123'
        self.assertEqual(str(self.car), expected_str)

    def test_02_car_model_relationship(self):
        self.assertEqual(self.car.car_model, self.car_model)

    def test_03_user_relationship(self):
        self.assertEqual(self.car.seller_account_id, self.user)

class AdvertisementTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.car_model = CarModel.objects.create(make='Toyota', model='Camry')
        self.car = Car.objects.create(
            number_of_owners=1,
            registration_number='ABC123',
            manufacture_year=2020,
            number_of_doors=4,
            mileage=5000,
            car_model=self.car_model,
        )
        self.advertisement = Advertisement.objects.create(
            seller_account_id=self.user, car_id=self.car
        )

    def test_01_advertisement_date_auto_now(self):
        self.assertIsNotNone(self.advertisement.advertisement_date)

    def test_02_seller_account_relationship(self):
        self.assertEqual(self.advertisement.seller_account_id, self.user)

    def test_03_car_relationship(self):
        self.assertEqual(self.advertisement.car_id, self.car)
