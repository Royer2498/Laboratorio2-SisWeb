# Generated by Django 2.2 on 2019-04-17 02:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Superheroe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('power', models.CharField(max_length=150)),
                ('house', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=150)),
            ],
        ),
    ]
