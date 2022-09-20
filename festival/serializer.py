from tkinter import BOTH
from rest_framework import serializers
from .models import Booth, BoothEvent, Food, Menu, Notice

class BoothSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booth
        fields = '__all__'

class BoothEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoothEvent
        fields = '__all__'
        read_only_fields = ('booth_id',)

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
        read_only_fields = ('food_id',)

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'