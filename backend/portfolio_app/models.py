from django.db import models
from user_app.models import User
from django.core import validators as v

class Portfolio(models.Model):
    user = models.OneToOneField(
        User, 
        related_name='portfolio',
        on_delete=models.CASCADE,
        unique = True
    )
    money = models.DecimalField(
        max_digits = 9,
        decimal_places = 2,
        validators = [
            v.MinValueValidator(0)
        ]
    )