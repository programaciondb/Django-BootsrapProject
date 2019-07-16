from django.contrib import admin
from .models import Testimonio
# Register your models here.

class TestimonioAdmin(admin.ModelAdmin):
    readonly_fields = ['created', 'updated']

admin.site.register(Testimonio, TestimonioAdmin)