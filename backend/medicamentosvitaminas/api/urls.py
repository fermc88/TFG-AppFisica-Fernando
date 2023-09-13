from django.urls import path
from .views import (
    MedicamentoVitaminaListAPIView,
    DetalleMedicamentoVitaminaAPIView,
    ActualizarMedicamentoVitaminaAPIView,
    CrearMedicamentoVitaminaAPIView,
    EliminarMedicamentoVitaminaAPIView,
    TerminarMedicamentoVitaminaAPIView
)

urlpatterns = [
    # Rutas para Medicamentos y Vitaminas
    path('medicamentosvitaminas/', MedicamentoVitaminaListAPIView.as_view(), name='medicamentovitamina-list'),
    path('medicamentosvitaminas/<int:pk>/', DetalleMedicamentoVitaminaAPIView.as_view(), name='medicamentovitamina-detail'),
    path('medicamentosvitaminas/<int:pk>/actualizar/', ActualizarMedicamentoVitaminaAPIView.as_view(), name='medicamentovitamina-update'),
    path('medicamentosvitaminas/crear/', CrearMedicamentoVitaminaAPIView.as_view(), name='medicamentovitamina-create'),
    path('medicamentosvitaminas/<int:pk>/eliminar/', EliminarMedicamentoVitaminaAPIView.as_view(), name='medicamentovitamina-delete'),
    path('medicamentosvitaminas/<int:pk>/terminar/', TerminarMedicamentoVitaminaAPIView.as_view(), name='medicamentovitamina-terminar'),
]