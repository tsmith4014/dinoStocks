from django.contrib.auth import authenticate
from .models import User
from portfolio_app.models import Portfolio
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class SignUp(APIView):
    def post(self, request):
        request.data["username"] = request.data["email"]
        new_user = User.objects.create_user(**request.data)
        new_portfolio = Portfolio.objects.create(user=new_user, money=10000.00)
        token = Token.objects.create(user=new_user)
        return Response(
            {"Email": new_user.email, "token": token.key}, status=HTTP_201_CREATED
        )


class LogIn(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {"token": token.key, "user": user.email}, status=HTTP_201_CREATED
            )
        else:
            return Response("Log-in attempt failed.", status=HTTP_404_NOT_FOUND)


class UserPermissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class Info(UserPermissions):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        serialized_user = serializer.data
        return Response(serialized_user)


class LogOut(UserPermissions):
    def post(self, request):
        request.user.auth_token.delete()
        return Response("Logged out successfully.", status=HTTP_204_NO_CONTENT)
