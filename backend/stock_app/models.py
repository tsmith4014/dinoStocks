from django.db import models

# Create your models here.


class Stock(models.Model):
    name = models.CharField()


class User_Stock(models.Model):
    pass
