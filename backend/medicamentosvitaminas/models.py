from django.db import models

class MedicamentoVitamina(models.Model):
    TIPO_CHOICES = [
        ('medicamento', 'Medicamento'),
        ('vitamina', 'Vitamina'),
    ]

    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)
    hora_ingesta = models.TimeField()
    realizado = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre
