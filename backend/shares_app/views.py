from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Shares
from .serializers import SharesSerializer
from realstonks_app.models import StockMarket


# Create your views here.
class All_Stocks_Shares(APIView):
    def get(self, request):
        try:
            portfolio = request.user.portfolio
            shares = portfolio.shares.all()
            ser_shares = SharesSerializer(shares, many=True)
            return Response(ser_shares.data)
        except:
            print("didn't work")
            return Response(False)

    def post(self, request):
        try:
            portfolio = request.user.portfolio
            ticker = request.data.get("ticker")
            shares = request.data.get("shares")
            current_stock_data = StockMarket.objects.get(ticker=ticker)
            new_shares = Shares.objects.create(
                portfolio=portfolio,
                ticker=ticker,
                shares=shares,
                price_at_purchase=current_stock_data.price,
                dino_name=current_stock_data.name,
                dino_ticker=current_stock_data.dino_ticker,
            )
            portfolio.money -= shares * current_stock_data.price
            portfolio.save()
            print(new_shares)
            return Response(SharesSerializer(new_shares).data)
        except:
            print("Didn't work")
            return Response(False)


class Single_Stock_Shares(APIView):
    def get(self, request, shares_id):
        pass
