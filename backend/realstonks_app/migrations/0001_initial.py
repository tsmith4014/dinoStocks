# Generated by Django 5.0 on 2023-12-28 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StockMarket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField()),
                ('dino_ticker', models.CharField(max_length=5)),
                ('ticker', models.CharField(max_length=10)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('change_point', models.DecimalField(decimal_places=2, max_digits=6)),
                ('change_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('total_vol', models.CharField(max_length=50)),
            ],
        ),
    ]
