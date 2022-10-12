from django.shortcuts import render
from .models import Booth, Food, Menu
from django.db.models import Q
# Create your views here.

def home(request):
    foods = Food.objects.all()
    booths = Booth.objects.all()
    return render(request, 'main.html', {'foods' : foods, 'booths' : booths})

def booth(request):
    booths = Booth.objects.filter(Q(day=1)|Q(day=3))
    return render(request, 'booth.html', {'booths' : booths})

def booth2(request):
    booths = Booth.objects.filter(day=2)
    return render(request, 'booth2.html', {'booths' : booths})

def dday(request):
    return render(request,'dday.html')

def food(request):
    foods = Food.objects.all()
    menus = Menu.objects.all()
    return render(request, 'food.html', {'foods' : foods, 'menus' : menus})

def info(request):
    return render(request, 'info.html')

def navbar(request):
    return render(request,'navbar.html')

def schedule(request):
    return render(request,'schedule.html')