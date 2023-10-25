# Generated by Django 3.1.7 on 2023-10-25 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='address_line_2',
        ),
        migrations.RemoveField(
            model_name='order',
            name='postal_zip_code',
        ),
        migrations.RemoveField(
            model_name='order',
            name='state_province_region',
        ),
        migrations.AlterField(
            model_name='order',
            name='amount',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='order',
            name='shipping_price',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='price',
            field=models.IntegerField(),
        ),
    ]
