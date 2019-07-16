from django.db import models

# Create your models here.
class Testimonio(models.Model):
    name = models.CharField(max_length=50, null=False, verbose_name="Nombre")
    mensaje = models.TextField(verbose_name="Mensaje")
    imagen = models.ImageField(verbose_name="Foto", upload_to="testimonials")
    created = models.DateTimeField(auto_now_add=True, verbose_name = "Creado")
    updated = models.DateTimeField(auto_now=True, verbose_name = "Actualizado")


    class Meta:
        verbose_name = "Testimonio"
        verbose_name_plural = "Testimonios"
        ordering = ["-created"]

    def __str__(self):
        return self.name