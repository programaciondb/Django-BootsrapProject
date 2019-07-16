from django.db import models

# Create your models here.

class Contacto(models.Model):
    name = models.CharField(max_length=50, null=False, verbose_name="Nombre")
    email = models.EmailField(null=False, verbose_name="Email")
    message = models.TextField(verbose_name="Mensaje")
    created = models.DateTimeField(auto_now_add=True, verbose_name = "Creado")
    updated = models.DateTimeField(auto_now=True, verbose_name = "Actualizado")


    class Meta:
        verbose_name = "Contacto"
        verbose_name_plural = "Contactos"
        ordering = ["-created"]

    def __str__(self):
        return self.name