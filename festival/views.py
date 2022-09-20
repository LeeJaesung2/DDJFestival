from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import BoothSerializer, BoothEventSerializer, FoodSerializer, MenuSerializer, NoticeSerializer
from .models import Booth, BoothEvent, Food, Menu, Notice

# Create your views here.
@api_view(['GET'])
def getBooths(request):
    booths = Booth.objects.all()
    serializer = BoothSerializer(booths, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getBoothById(request, booth_id):
    booth = Booth.objects.get(pk = booth_id)
    serializer = BoothSerializer(booth)
    return Response(serializer.data)

@api_view(['GET'])
def getBoothEvents(request, booth_id):
    boothEvent = BoothEvent.objects.filter(booth = booth_id)
    serializer = BoothEventSerializer(boothEvent, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getFoods(request):
    foods = Food.objects.all()
    serializer = FoodSerializer(foods, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getFoodById(request, food_id):
    food = Food.objects.get(pk = food_id)
    serializer = FoodSerializer(food)
    return Response(serializer.data)

@api_view(['GET'])
def getFoodMenus(request, food_id):
    menu = Menu.objects.filter(name = food_id)
    serializer = MenuSerializer(menu, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getNotices(request):
    notices = Notice.objects.all()
    serializer = NoticeSerializer(notices, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getNoticeById(request, notice_id):
    notice = Notice.objects.get(pk = notice_id)
    serializer = NoticeSerializer(notice)
    return Response(serializer.data)