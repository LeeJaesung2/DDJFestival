from django.urls import path, include
from . import views

urlpatterns = [    
    path('booth', views.booth, name="booth"),
    path('booth2', views.booth2, name="booth2"),
    path('dday', views.dday, name="dday"),
    path('food', views.food, name="food"),
    path('info', views.info, name="info"),
    path('navbar', views.navbar, name="navbar"),
    path('schedule', views.schedule, name="schedule"),
]