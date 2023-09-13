from django.contrib import admin
from .models import ControlAgua

@admin.register(ControlAgua)
class ControlAguaAdmin(admin.ModelAdmin):
    list_display = ('fecha_creacion', 'meta_intake_vasos', 'vasos_tomados', 'notificacion', 'realizado')
    list_filter = ('fecha_creacion', 'notificacion', 'realizado')
    search_fields = ('fecha_creacion',)
    date_hierarchy = 'fecha_creacion'
    ordering = ('-fecha_creacion',)
    readonly_fields = ('fecha_creacion',)
