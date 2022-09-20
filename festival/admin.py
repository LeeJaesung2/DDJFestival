from django.contrib import admin
from .models import Booth, Food, Menu, BoothEvent, Notice

admin.site.register(Booth)
admin.site.register(Food)
admin.site.register(Menu)
admin.site.register(Notice)
admin.site.register(BoothEvent)