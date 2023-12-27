from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Portfolio

class PortfolioSerializer(ModelSerializer):
# import stock serializer and create serializer method field
    class Meta:
        model = Portfolio
        fields = [
            'user',
            'id',
            'money',
            # 'stocks'
        ]