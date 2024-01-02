from django.urls import path
from .views import RealStonks, SingleStock

urlpatterns = [
    path("", RealStonks.as_view(), name="real_stonks"),
    path("<int:stock_id>/", SingleStock.as_view(), name="single_stock"),
]
