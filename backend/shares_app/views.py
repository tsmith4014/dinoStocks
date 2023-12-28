from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Shares
from .serializers import SharesSerializer


# Create your views here.
class All_Stocks_Shares(APIView):
    def get(self, request):
        try:
            shares = Shares.objects.all()
            ser_shares = SharesSerializer(shares, many=True)
            return Response(ser_shares.data)
        except:
            print("didn't work")


class Single_Stock_Shares(APIView):
    def get(self, request, shares_id):
        pass
