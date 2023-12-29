from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PortfolioSerializer
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND,
)


class PortfolioInfo(APIView):
    def get(self, request):
        try:
            portfolio_obj = PortfolioSerializer(request.user.portfolio)
            print(portfolio_obj.data)
            return Response(portfolio_obj.data)
        except:
            return Response("portfolio not found", status=HTTP_404_NOT_FOUND)
