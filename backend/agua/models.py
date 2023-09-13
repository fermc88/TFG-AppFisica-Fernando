from django.db import models

class ControlAgua(models.Model):
    fecha_creacion = models.DateField(auto_now_add=True)
    meta_intake_vasos = models.PositiveIntegerField()
    vasos_tomados = models.PositiveIntegerField(default=0)
    notificacion = models.BooleanField(default=False)
    realizado = models.BooleanField(default=False)

    def __str__(self):
        return self.fecha_creacion