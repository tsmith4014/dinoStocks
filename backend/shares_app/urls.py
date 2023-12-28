from django.urls import path
from .views import All_Stocks_Shares, Single_Stock_Shares

urlpatterns = [
    path("", All_Stocks_Shares.as_view(), name="all_stocks_shares"),
    path("<int:shares_id>/", Single_Stock_Shares.as_view(), name="single_stock_shares"),
]
