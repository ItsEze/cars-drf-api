from rest_framework.generics import RetrieveUpdateAPIView,CreateAPIView
from .models import UserProfile
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import SignupSerializer, UserProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class SignupView(CreateAPIView):
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            User.objects.create_user(username=username, password=password)
            

        
class UserProfileView(RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user_profile, created = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(user_profile)
        return Response(serializer.data)
    
    def get_object(self):
        return UserProfile.objects.get(user=self.request.user)
    def put(self, request):
        user_profile = self.get_object()
        serializer = UserProfileSerializer(user_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    
    

            