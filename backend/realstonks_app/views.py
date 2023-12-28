from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StockMarketSerializer
from .models import StockMarket


# Create your views here.
class RealStonks(APIView):
    def get(self, request):
        stocks = StockMarketSerializer(StockMarket.objects.order_by("price"), many=True)
        return Response(stocks.data)
