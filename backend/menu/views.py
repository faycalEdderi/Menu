from django.shortcuts import render

from rest_framework import viewsets
from .serializer import MenuSerializer, WeekSerializer
from .models import *



class MenuViews(viewsets.ModelViewSet):
    serializer_class= MenuSerializer
    queryset = Menu.objects.all()


class WeekViews(viewsets.ModelViewSet):
    serializer_class = WeekSerializer
    queryset = Week.objects.all()
