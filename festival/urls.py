from django.urls import path, include
from . import views

urlpatterns = [
    path('booths', views.getBooths, name="getBooths"),
    path('booths2', views.getBooths2, name="getBooths2"),
    path('booth/<int:booth_id>', views.getBoothById, name="getBoothById"),
    path('booth/<int:booth_id>/event', views.getBoothEvents, name="getBoothEvents"),
    path('foods', views.getFoods, name="getFoods"),
    path('food/<int:food_id>', views.getFoodById, name="getFoodById"),
    path('food/<int:food_id>/menu', views.getFoodMenus, name="getFoodMenus"),
    path('notices', views.getNotices, name="getNotices"),
    path('notice/<int:notice_id>', views.getNoticeById, name="getNoticeById"),    
]