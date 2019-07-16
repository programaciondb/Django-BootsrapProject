from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ContactForm
from .models import Contacto

# Create your views here.
def contact(request):
    contactForm = ContactForm()

    if request.method == 'POST':
        contactForm = ContactForm(data=request.POST)
        if contactForm.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            message = request.POST.get('message', '')
            contacto = Contacto()
            contacto.name = name
            contacto.email = email
            contacto.message = message
            contacto.save()
            return redirect(reverse('contact')+'?ok')
    return render(request, "contact/formulario.html", {'form':contactForm})