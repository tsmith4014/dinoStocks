# myapp/tasks.py
from celery import shared_task
from datetime import datetime
import requests
from .models import StockMarket
from django.utils import timezone
from dinostocks_proj.settings import env


@shared_task
def get_stock_data():
    print(f"Running get_stock_data at {datetime.now()}")
    # Your periodic task code goes here
    headers = {
        "X-RapidAPI-Key": env.get("RAPID_API_KEY"),
        "X-RapidAPI-Host": "realstonks.p.rapidapi.com",
    }

    stocks = {
        "AAPL": "Tyrannosaurus Rex - TREX",
        "AMZN": "Velociraptor - VELO",
        "MSFT": "Stegosaurus - STEGO",
        "GOOGL": "Triceratops - TRI",
        "TSLA": "Brachiosaurus - BRACH",
        "NVDA": "Ankylosaurus - ANKY",
        "FB": "Pterodactyl - PTERO",
        "JNJ": "Spinosaurus - SPINO",
        "V": "Allosaurus - ALLO",
        "MA": "Apatosaurus - APTO",
        "BABA": "Dilophosaurus - DILO",
        "GE": "Parasaurolophus - PARA",
        "BA": "Archaeopteryx - ARCH",
        "XOM": "Iguanodon - IGUA",
        "GM": "Pachycephalosaurus - PACHY",
        "PFE": "Microraptor - MICRO",
        "WFC": "Corythosaurus - CORY",
        "KO": "Plesiosaurus - PLESI",
        "NFLX": "Carnotaurus - CARNO",
        "IBM": "Deinonychus - DEINO",
    }

    for stock in stocks:
        dino_stock = {}
        url = f"https://realstonks.p.rapidapi.com/{stock}"
        response = requests.get(url, headers=headers)
        if response.json():
            for item in response.json():
                dino_stock[item] = response.json()[item]
        currentStock = StockMarket.objects.get(ticker=stock)
        currentStock.price = dino_stock.get("price", 0.0)
        currentStock.change_point = dino_stock.get("change_point", 0.0)
        currentStock.change_percentage = dino_stock.get("change_percentage", 0.0)
        currentStock.total_vol = dino_stock.get("total_vol", "")
        currentStock.timestamp = timezone.now()
        currentStock.save()
