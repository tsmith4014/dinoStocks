from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StockMarketSerializer
from .models import StockMarket
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND,
)


# Create your views here.
class RealStonks(APIView):
    def get(self, request):
        try:
            stocks = StockMarketSerializer(
                StockMarket.objects.order_by("price"), many=True
            )
            return Response(stocks.data)
        except:
            return Response(status=HTTP_404_NOT_FOUND)
        
class SingleStock(APIView):
    def get(self, request, stock_id):
        print(stock_id)
        try:
            stock=StockMarketSerializer(StockMarket.objects.get(id=stock_id))
            print(stock)
            return Response(stock.data)
        except:
            return Response(status=HTTP_404_NOT_FOUND)

