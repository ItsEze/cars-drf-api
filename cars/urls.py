from django.urls import path, register_converter
from .views import AllAdvertisements, SelectedAdvertisement
from .converters import IntOrStrConverter

register_converter(IntOrStrConverter, 'int_or_str')

urlpatterns = [
    path('',AllAdvertisements.as_view(), name='all_advertisements'),
    path('<int_or_str:id>/', SelectedAdvertisement.as_view(), name='selected_advertisement')
]