from django.db import models


# Create your models here.
class StockMarket(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    name = models.CharField()
    dino_ticker = models.CharField(max_length=5)
    ticker = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    change_point = models.DecimalField(max_digits=6, decimal_places=2)
    change_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    total_vol = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} - {self.dino_ticker} - {self.price}"
