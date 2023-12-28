from django.urls import path
from .views import HistoricalInfo

urlpatterns=[
    path('', HistoricalInfo.as_view(), name='Historicals')
]