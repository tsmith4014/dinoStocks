from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer

class PortfolioInfo(APIView):
    def get(self, request):
        portfolio_obj = PortfolioSerializer(request.user.portfolio)
        # portfolio_obj = Portfolio.objects.get(id=request.user_id)
        # if PortfolioSerializer(portfolio_obj):
        #     return Response(portfolio_obj)
        print(portfolio_obj.data)
        return Response(portfolio_obj.data)