from django.db import models
from portfolio_app.models import Portfolio


# Create your models here.
class Shares(models.Model):
    dino_name = models.CharField()
    ticker = models.CharField()
    dino_ticker = models.CharField()
    portfolio = models.ForeignKey(
        Portfolio, related_name="shares", on_delete=models.CASCADE
    )
    shares = models.PositiveIntegerField()
    price_at_purchase = models.DecimalField(max_digits=8, decimal_places=2)
