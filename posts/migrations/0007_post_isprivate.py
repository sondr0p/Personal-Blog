# Generated by Django 3.0.5 on 2020-07-26 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0006_auto_20200607_1939'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='isPrivate',
            field=models.BooleanField(default=False),
        ),
    ]
