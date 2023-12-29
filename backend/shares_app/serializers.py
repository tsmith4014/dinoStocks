from rest_framework import serializers
from .models import Shares
from realstonks_app.models import StockMarket

# class SharesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Shares
#         fields = "__all__"


class SharesSerializer(serializers.ModelSerializer):
    current_price = serializers.SerializerMethodField()

    class Meta:
        model = Shares
        fields = [
            "id",
            "ticker",
            "dino_name",
            "dino_ticker",
            "portfolio",
            "shares",
            "price_at_purchase",
            "current_price",
        ]

    def get_current_price(self, instance):
        current_price = StockMarket.objects.get(ticker=instance.ticker).price
        return current_price
