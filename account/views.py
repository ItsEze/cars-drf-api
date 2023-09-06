from rest_framework.generics import CreateAPIView, APIView
from .models import UserProfile
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated


class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            User.objects.create_user(email=email, password=password)
            
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, id):
        profile = UserProfile.objects.get(id=id)