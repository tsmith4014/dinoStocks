from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Portfolio
from shares_app.serializers import SharesSerializer

class PortfolioSerializer(ModelSerializer):
    def get_shares_information(self, instance):
        shares = instance.shares.all()
        return SharesSerializer(shares, many=True).data

    shares = serializers.SerializerMethodField(method_name='get_shares_information')
# import stock serializer and create serializer method field
    class Meta:
        model = Portfolio
        fields = [
            'user',
            'id',
            'money',
            'shares'
        ]