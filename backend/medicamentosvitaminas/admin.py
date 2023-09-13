from django.contrib import admin
from .models import MedicamentoVitamina

@admin.register(MedicamentoVitamina)
class MedicamentoVitaminaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'tipo', 'hora_ingesta', 'realizado')
    list_filter = ('tipo', 'realizado')
    search_fields = ('nombre',)
    ordering = ('hora_ingesta',)