from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Advertisement
from django.contrib.auth.models import User
from .serializers import AdvertisementSerializer
from django.http import Http404

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
            return Response(serializer.data)
        # https:localhost:8000/api/v1/advertisements/?email={username}


        return Response(serializer.data)
    
    def post(self, request):
        serializer = AdvertisementSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectedAdvertisement(APIView):

    def get_advertisement(self, id):
        try:
            return [Advertisement.objects.get(pk=id)]
        except Advertisement.DoesNotExist:
            raise Http404("Advertisement does not exist")
        # else:
        #     email = request.GET.get('email')
        #     print(email)
        #     advertisements = Advertisement.objects.filter(seller_account__username=email)
        #     if advertisements.count() > 1:
        #         return advertisements
        #     else:
        #         return [advertisements.first()]

    def get(self, request, id):
        advertisement = self.get_advertisement(id)
        serializer = AdvertisementSerializer(advertisement, many=True)
        return Response(serializer.data)
    
    def delete(self, request, id):
        advertisement = self.get_advertisement(id)
        advertisement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, id):
        print("Ha no updating for you!!!!")
        pass



