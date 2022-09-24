from django.shortcuts import render
from .models import Booth, BoothEvent, Food, Menu, Notice

# Create your views here.

def home(request):
    return render(request,'main.html')

def navbar(request):
    return render(request,'navbar.html')

def booth(request):
    booths = Booth.objects.all()
    return render(request, 'booth.html', {'booths' : booths})

def booth2(request):
    booths = Booth.objects.all()
    return render(request, 'booth2.html', {'booths' : booths})

def food(request):
    foods = Food.objects.all()
    return render(request, 'food.html', {'foods' : foods})

def info(request):
    notices = Notice.objects.all()
    return render(request, 'notice.html', {'notices' : notices})