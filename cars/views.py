from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Advertisement
from .serializers import AdvertisementSerializer

# Create your views here.
class AllAdvertisements(APIView):
    
    def get(self,request):
        advertisements = Advertisement.objects.order_by("id")
        serializer = AdvertisementSerializer(advertisements, many=True)
        return Response(serializer.data)



