from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Historicals

class HistoricalSerializer(ModelSerializer):

    class Meta:
        model = Historicals
        fields = '__all__'