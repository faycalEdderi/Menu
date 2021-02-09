from django.shortcuts import render

from rest_framework import viewsets
from .serializer import MenuSerializer
from .models import *



class MenuViews(viewsets.ModelViewSet):
    serializer_class= MenuSerializer
    queryset = Menu.objects.all()
