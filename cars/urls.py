from django.urls import path, register_converter
from .views import AllAdvertisements
# from .converters import ~~~~~~

# register_converter()

urlpatterns = [
    path(''),AllAdvertisements.as_view(),
    # path('')
]