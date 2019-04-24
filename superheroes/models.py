from django.db import models

class Superheroe(models.Model):
    name = models.CharField(max_length=150)
    power = models.CharField(max_length=150)
    house = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    bio = models.CharField(max_length=500)

    

