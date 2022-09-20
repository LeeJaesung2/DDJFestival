from django.db import models

# Create your models here.

class Booth(models.Model):
    name = models.CharField(max_length=200)
    sub_title = models.TextField()
    intro = models.TextField()
    location =  models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class BoothEvent(models.Model):
    booth = models.ForeignKey(Booth, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    
    def __str__(self):
        return self.title

class Food(models.Model):
    name = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    image = models.ImageField(blank=True, upload_to='static/image/food')

    def __str__(self):
        return self.name
    
class Menu(models.Model):
    name = models.ForeignKey(Food, on_delete=models.CASCADE)
    food_name = models.CharField(max_length=200)
    emoticon = models.ImageField(blank=True, upload_to='static/image/menu')
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.food_name

class Notice(models.Model):
    pub_date = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(blank=True, upload_to='static/image/notice')

    def __str__(self):
        return self.title