from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Shares
from .serializers import SharesSerializer
from realstonks_app.models import StockMarket
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
)


class All_Stocks_Shares(APIView):
    def get(self, request):
        try:
            portfolio = request.user.portfolio
            shares = portfolio.shares.all()
            ser_shares = SharesSerializer(shares, many=True)
            return Response(ser_shares.data)
        except:
            return Response("data not found", status=HTTP_404_NOT_FOUND)

    def post(self, request):
        """User Buys Shares"""
        try:
            portfolio = request.user.portfolio
            ticker = request.data.get("ticker")
            shares = int(request.data.get("shares", 0))
            current_stock_data = StockMarket.objects.get(ticker=ticker)
            price = shares * current_stock_data.price
            if price > portfolio.money:
                return Response(data="Insufficient funds.", status=HTTP_204_NO_CONTENT)
            existing_shares = Shares.objects.filter(
                portfolio=portfolio, ticker=ticker
            ).first()
            if existing_shares:
                # Update existing shares
                existing_shares.shares += shares
                existing_shares.save()
                return Response(
                    SharesSerializer(existing_shares).data, status=HTTP_200_OK
                )
            else:
                # Create new shares
                new_shares = Shares.objects.create(
                    portfolio=portfolio,
                    ticker=ticker,
                    shares=shares,
                    price_at_purchase=current_stock_data.price,
                    dino_name=current_stock_data.name,
                    dino_ticker=current_stock_data.dino_ticker,
                )
                portfolio.money -= price
                portfolio.save()
                return Response(
                    SharesSerializer(new_shares).data, status=HTTP_201_CREATED
                )
        except Exception as e:
            return Response({"error": str(e)}, status=HTTP_400_BAD_REQUEST)


class Single_Stock_Shares(APIView):
    def get(self, request, shares_id):
        try:
            single_stock = Shares.objects.get(id=shares_id)
            serializer = SharesSerializer(single_stock)
            return Response(serializer.data)
        except:
            return Response("Shares_id doesn't exist", status=HTTP_404_NOT_FOUND)

    def delete(self, request, shares_id):
        """Sell all shares"""
        try:
            portfolio = request.user.portfolio
            single_stock = portfolio.shares.get(id=shares_id)
            current_price = StockMarket.objects.get(ticker=single_stock.ticker).price
            portfolio.money += current_price * single_stock.shares
            portfolio.save()
            single_stock.delete()
            return Response(
                f"{current_price*single_stock.shares} has been added to your account. Total: {portfolio.money}",
                status=HTTP_204_NO_CONTENT,
            )
        except:
            return Response("Shares_id doesn't exist", status=HTTP_400_BAD_REQUEST)

    def put(self, request, shares_id):
        """Sell or buy some shares user already owns"""
        try:
            portfolio = request.user.portfolio
            single_stock = portfolio.shares.get(id=shares_id)
            current_price = StockMarket.objects.get(ticker=single_stock.ticker).price
            buy = request.data.get("buy")
            shares = int(request.data.get("shares", 0))
            if buy:
                total = current_price * shares
                if total <= portfolio.money:
                    portfolio.money -= total
                    portfolio.save()
                    single_stock.shares += shares
                    single_stock.save()
                else:
                    return Response(
                        data="Insufficient funds.", status=HTTP_204_NO_CONTENT
                    )
            else:
                if shares >= single_stock.shares:
                    total = current_price * single_stock.shares
                    portfolio.money += total
                    portfolio.save()
                    single_stock.delete()
                    return Response(
                        f"Transaction complete. All shares sold. Money:{portfolio.money}",
                        status=HTTP_204_NO_CONTENT,
                    )
                else:
                    total = current_price * shares
                    portfolio.money += total
                    portfolio.save()
                    single_stock.shares -= shares
                    single_stock.save()
            return Response(
                f"Transaction complete. Current Shares: {single_stock.shares} Money:{portfolio.money}",
                status=HTTP_204_NO_CONTENT,
            )
        except Exception as e:
            return Response(
                f"Error handling transaction: {str(e)}", status=HTTP_400_BAD_REQUEST
            )
