from django.shortcuts import render
from .models import Testimonio
# Create your views here.

def testimonials(request):
    testimonios = Testimonio.objects.all()
    return render(request, "testimonios/testimonios.html", {'testimonios':testimonios})