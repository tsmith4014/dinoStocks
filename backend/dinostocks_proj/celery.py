# myproject/celery.py
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab

# set the default Django settings module for the 'celery' program.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dinostocks_proj.settings")

# create a Celery instance and configure it using the settings from Django
celery_app = Celery("dinostocks_proj")

# Load task modules from all registered Django app configs.
celery_app.config_from_object("django.conf:settings", namespace="CELERY")

# Auto-discover tasks in all installed apps
celery_app.autodiscover_tasks()


celery_app.conf.beat_schedule = {
    "run-every-hour": {
        "task": "realstonks_app.tasks.get_stock_data",
        "schedule": crontab(minute=0, hour="*"),  # Run every hour
    },
    "portfolio-value": {
        "task": "historicals_app.tasks.get_portfolio_values",
        "schedule": crontab(minute=1, hour="*"),
    },
}
