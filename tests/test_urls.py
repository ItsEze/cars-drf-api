from django.test import TestCase
from django.urls import reverse, resolve
from cars.views import CarsView
from account.views import SignupView, ProfileView

class Test_urls(TestCase):
    def test_001_sign_up(self):
        pass