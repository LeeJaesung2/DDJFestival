from django.shortcuts import render
from .models import Booth, BoothEvent, Food, Menu, Notice
from django.db.models import Q
# Create your views here.

def home(request):
    return render(request,'main.html')

def booth(request):
    booths = Booth.objects.filter(Q(day=1)|Q(day=3))
    return render(request, 'booth.html', {'booths' : booths})

def booth2(request):
    booths = Booth.objects.filter(day=2)
    events = BoothEvent.objects.all()
    return render(request, 'booth2.html', {'booths' : booths, 'events' : events})

def dday(request):
    return render(request,'dday.html')

def food(request):
    foods = Food.objects.all()
    menus = Menu.objects.all()
    return render(request, 'food.html', {'foods' : foods, 'menus' : menus})

def info(request):
    notices = Notice.objects.all()
    return render(request, 'info.html', {'notices' : notices})

def navbar(request):
    return render(request,'navbar.html')

def schedule(request):
    return render(request,'schedule.html')