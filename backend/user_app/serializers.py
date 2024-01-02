from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import User
from portfolio_app.serializers import PortfolioSerializer


class UserSerializer(serializers.ModelSerializer):
    portfolio = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "date_joined",
            "email",
            "is_active",
            "is_staff",
            "is_superuser",
            "last_login",
            "portfolio",
        ]

    def get_portfolio(self, instance):
        return PortfolioSerializer(instance.portfolio).data
