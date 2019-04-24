
from rest_framework import serializers
from superheroes.models import Superheroe
 
class SuperheroeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Superheroe
        fields = ('id','name', 'power', 'house', 'city','bio')