from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Historicals
from .serializers import HistoricalSerializer

class HistoricalInfo(APIView):
    def get(self, request):
        # historical_obj = HistoricalSerializer(request.user.portfolio.historicals)
        # print(historical_obj.data)
        # return Response(historical_obj.data)
        pass