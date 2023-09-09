from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Advertisement
from django.contrib.auth.models import User
from .serializers import AdvertisementSerializer

# Create your views here.
class AllAdvertisements(APIView):
    
    def get(self,request):
        advertisements = Advertisement.objects.order_by("id")
        serializer = AdvertisementSerializer(advertisements, many=True)

        email = request.GET.get('email')
        if email:
            print(email)
            advertisements = Advertisement.objects.filter(seller_account__username=email)
            serializer = AdvertisementSerializer(advertisements, many=True)
            if advertisements.count() > 1:
                return Response(serializer.data)
            else:
                return Response(serializer.data)


        return Response(serializer.data)
    
    def post(self, request):
        serializer = AdvertisementSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectedAdvertisement(APIView):

    def get_advertisement(self, id, request):
        if type(id) == int:
            return [Advertisement.objects.get(id = id)]
        else:
            email = request.GET.get('email')
            print(email)
            advertisements = Advertisement.objects.filter(seller_account__username=email)
            if advertisements.count() > 1:
                return advertisements
            else:
                return [advertisements.first()]

    def get(self, request, id):
        advertisements = self.get_advertisement(id, request)
        serializer = AdvertisementSerializer(advertisements, many=True)
        return Response(serializer.data)


