# Generated by Django 3.0.5 on 2020-05-20 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_post_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.FileField(blank=True, upload_to=''),
        ),
    ]
