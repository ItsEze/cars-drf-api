from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from account.models import UserProfile
from account.serializers import SignupSerializer

class SignupViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_signup_view(self):
        url = reverse('signup')
        data = {
            'email': 'test@example.com',
            'password': 'testpassword',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_signup_view_invalid_data(self):
        url = reverse('signup')
        data = {
            'email': 'invalid-email',  # Invalid email format
            'password': '',            # Empty password
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class ProfileViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.user_profile = UserProfile.objects.create(user=self.user)

    def test_profile_view_authenticated(self):
        url = reverse('profile', args=[self.user_profile.id])
        self.client.force_authenticate(user=self.user)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_profile_view_unauthenticated(self):
        url = reverse('profile', args=[self.user_profile.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
