from django.shortcuts import render

# Create your views here.
def food_booth(request):
    return render(request, 'food.html')