from getpass import GetPassWarning
from django.contrib import admin

# Register your models here.'
from .models import Booth, Food, Menu, Gongzi

admin.site.register(Booth)
admin.site.register(Food)
admin.site.register(Menu)
admin.site.register(Gongzi)