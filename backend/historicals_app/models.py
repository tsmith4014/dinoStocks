from django.db import models
from portfolio_app.models import Portfolio
from django.core import validators as v

class Historicals(models.Model):
    portfolio = models.OneToOneField(
        Portfolio, 
        related_name='historicals',
        on_delete=models.CASCADE,
        unique = True
    )

