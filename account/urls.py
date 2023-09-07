from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignupView, ProfileView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/advertisements', include('cars.urls')),
    path('get-token', obtain_auth_token),
    path('signup', SignupView.as_view()),
    path('profile', ProfileView.as_view()),
]