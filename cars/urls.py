from django.urls import path, register_converter
from .views import AllAdvertisements, UserAdvertisements
from .converters import IntOrStrConverter

register_converter(IntOrStrConverter, 'int_or_str')

urlpatterns = [
    path('', AllAdvertisements.as_view(), name='all_advertisements'),
    path('user', UserAdvertisements.as_view(), name='selected_advertisement')
]