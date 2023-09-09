from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Advertisement, Car
from django.contrib.auth.models import User
from .serializers import AdvertisementSerializer

# Create your views here.
class AllAdvertisements(APIView):
    
    def get(self, request):
            advertisements = Advertisement.objects.order_by("advertisement_date")
            serializer = AdvertisementSerializer(advertisements, many=True)
            return Response(serializer.data)
    
class UserAdvertisements(APIView):
    def get(self, request):
            user = self.request.user
            advertisements = Advertisement.objects.filter(seller_account=user)
            serializer = AdvertisementSerializer(advertisements, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['seller_account'] = self.request.user
        serializer = AdvertisementSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # def delete(self, request):
    #     pass
    
class Car(APIView):
    def post(self, request):
            pass
        
    
        
        

