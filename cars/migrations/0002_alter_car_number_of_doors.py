# Generated by Django 4.2.3 on 2023-09-07 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='number_of_doors',
            field=models.IntegerField(default=5),
        ),
    ]
