from django.db import models

class Booth(models.Model):
    name = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    intro = models.CharField(max_length=200)
    location =  models.CharField(max_length=200)
    day = models.IntegerField()
    src = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    src = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Menu(models.Model):
    name = models.ForeignKey(Food, related_name='foods',on_delete=models.CASCADE)
    food_name = models.CharField(max_length=200)
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.food_name

