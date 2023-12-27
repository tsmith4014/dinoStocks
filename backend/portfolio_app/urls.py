from django.urls import path
from .views import PortfolioInfo

urlpatterns=[
    path('', PortfolioInfo.as_view(), name='Portfolio')
]