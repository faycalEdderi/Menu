from rest_framework import serializers
from .models import Menu, Week

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('id', 'name', 'description', 'day_of_menu')


class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Week
        fields=('id', 'day')