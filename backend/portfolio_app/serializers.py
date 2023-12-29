from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Portfolio
from shares_app.serializers import SharesSerializer
from historicals_app.serializers import HistoricalSerializer


class PortfolioSerializer(ModelSerializer):
    def get_shares_information(self, instance):
        shares = instance.shares.all()
        return SharesSerializer(shares, many=True).data

    def get_historicals(self, instance):
        historicals = instance.historicals.all()
        return HistoricalSerializer(historicals, many=True).data

    shares = serializers.SerializerMethodField(method_name="get_shares_information")
    historicals = serializers.SerializerMethodField(method_name="get_historicals")

    # import stock serializer and create serializer method field
    class Meta:
        model = Portfolio
        fields = ["user", "id", "money", "shares", "historicals"]
