from rest_framework.generics import CreateAPIView, RetrieveAPIView
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
            
class ProfileView(RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
   
    def get_object(self):
        try:  
            user_profile = UserProfile.objects.get(user=self.request.user)
            return user_profile
        except UserProfile.DoesNotExist:  
            return Response({'detail': 'Profile not found.'})
        
class ProfileCreate(CreateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def create(self, request):
        existing_profile_check = UserProfile.objects.filter(user=self.request.user).first()
        if existing_profile_check:
            return Response({'detail': 'Profile already exists.'})

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(
                user=self.request.user,
                street_name=request.data['street_name'],
                street_number=request.data['street_number'],
                zip_code=request.data['zip_code'],
                city=request.data['city']
            )

            return Response({'detail': 'Profile created successfully.'})
    

            