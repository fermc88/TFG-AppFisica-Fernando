from django.db import models

# Create your models here.
class Actividad(models.Model):
    nombre = models.CharField(max_length=100)
    duracion = models.CharField(max_length=50)
    series = models.IntegerField()
    repeticiones = models.IntegerField()
    TIPO_CHOICES = (
        ('cardio', 'Cardio'),
        ('muscular', 'Muscular')
    )
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    notificacion = models.BooleanField(default=False)
    realizado = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre