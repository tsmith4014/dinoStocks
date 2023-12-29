from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Historicals
from .serializers import HistoricalSerializer
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND,
)


class HistoricalInfo(APIView):
    def get(self, request):
        try:
            portfolio = request.user.portfolio
            historicals = Historicals.objects.filter(portfolio_id=portfolio).order_by(
                "time_stamp"
            )
            ser_historicals = HistoricalSerializer(historicals, many=True)
            return Response(ser_historicals.data)
        except:
            return Response("Historical data not found", status=HTTP_404_NOT_FOUND)
