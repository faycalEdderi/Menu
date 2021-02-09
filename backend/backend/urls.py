from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from menu import views

router = routers.DefaultRouter()
router.register(r'menus', views.MenuViews, 'menu' )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
