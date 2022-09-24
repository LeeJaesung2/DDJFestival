from django.shortcuts import render
from .models import Booth, BoothEvent, Food, Menu, Notice

# Create your views here.

def home(request):
    return render(request,'main.html')

def getBooths(request):
    booths = Booth.objects.all()
    return render(request, 'booth.html', {'booths' : booths})

def getBooths2(request):
    booths = Booth.objects.all()
    return render(request, 'booth2.html', {'booths' : booths})

def getBoothEvents(request, booth_id):
    boothEvents = BoothEvent.objects.filter(booth = booth_id)
    return render(request, 'booth.html', {'boothEvents' : boothEvents})

def getFoods(request):
    foods = Food.objects.all()
    return render(request, 'food.html', {'foods' : foods})

def getFoodById(request, food_id):
    food = Food.objects.get(pk = food_id)
    return render(request, 'food.html', {'food' : food})

def getFoodMenus(request, food_id):
    menu = Menu.objects.filter(name = food_id)
    return render(request, 'food.html', {'menu' : menu})

def getNotices(request):
    notices = Notice.objects.all()
    return render(request, 'notice.html', {'notices' : notices})

def getNoticeById(request, notice_id):
    notice = Notice.objects.get(pk = notice_id)
    return render(request, 'notice.html', {'notice' : notice})