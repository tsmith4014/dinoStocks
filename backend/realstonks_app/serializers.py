from rest_framework import serializers
from .models import StockMarket


class StockMarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockMarket
        fields = [
            "id",
            "name",
            "dino_ticker",
            "ticker",
            "price",
            "change_point",
            "change_percentage",
            "total_vol",
            "timestamp",
        ]
