from django.urls import path
from .views import RealStonks

urlpatterns = [path("", RealStonks.as_view(), name="real_stonks")]
