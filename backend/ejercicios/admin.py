from django.contrib import admin
from .models import Actividad

@admin.register(Actividad)
class ActividadAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'duracion', 'series', 'repeticiones', 'tipo', 'notificacion', 'realizado')

