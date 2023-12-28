from celery import shared_task
from datetime import datetime
import requests
from realstonks_app.models import StockMarket
from django.utils import timezone
from dinostocks_proj.settings import env
from portfolio_app.models import Portfolio
from historicals_app.models import Historicals


@shared_task
def get_portfolio_values():
    portfolios = Portfolio.objects.all()
    for portfolio in portfolios:
        portfolio_value = 0.00
        # if portfolio.shares:
        #     shares = portfolio.shares.all()
        #     for share in shares:
        #         current_stock_data = StockMarket.objects.get(ticker=share.ticker)
        #         portfolio_value += share.shares * current_stock_data.price
        new_historical = Historicals.objects.create(
            portfolio=portfolio, value=portfolio_value
        )
        print(new_historical)