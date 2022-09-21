from django.shortcuts import render

# Create your views here.
def booth(request):
    return render(request, 'booth.html')