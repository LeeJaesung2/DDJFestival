from django.urls import path, include
from . import views

urlpatterns = [
    path('navbar', views.navbar, name="navbar"),
    path('booth', views.booth, name="booth"),
    path('booth2', views.booth2, name="booth2"),
    path('food', views.food, name="food"),
    path('info', views.info, name="info"),   
]