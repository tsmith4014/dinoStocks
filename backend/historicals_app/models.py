from django.db import models
from portfolio_app.models import Portfolio
from django.core import validators as v

class Historicals(models.Model):
    portfolio = models.ForeignKey(
        Portfolio, 
        related_name='historicals',
        on_delete=models.CASCADE,
    )
    time_stamp = models.DateTimeField(auto_now_add=True)
    portfolio_value= models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default = 0.00
    )

