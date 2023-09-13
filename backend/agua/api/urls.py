from django.urls import path
from .views import (
    IngestaAguaPendienteListAPIView,
    PlanIngestaCrearView,
    IncrementarVasosTomadosView,
    RestarVasosTomadosView,
    EditarPlanActivoView,
    FinalizarPlanView,
    ReiniciarPlanView,
)

urlpatterns = [
    path('ingesta-agua/pendientes/', IngestaAguaPendienteListAPIView.as_view(), name='ingesta-agua-pendientes'),
    path('plan-ingesta/crear/', PlanIngestaCrearView.as_view(), name='plan-ingesta-crear'),
    path('plan-ingesta/incrementar/', IncrementarVasosTomadosView.as_view(), name='plan-ingesta-incrementar'),
    path('plan-ingesta/restar/', RestarVasosTomadosView.as_view(), name='plan-ingesta-restar'),
    path('plan-ingesta/editar/', EditarPlanActivoView.as_view(), name='plan-ingesta-editar'),
    path('plan-ingesta/finalizar/', FinalizarPlanView.as_view(), name='plan-ingesta-finalizar'),
    path('plan-ingesta/reiniciar/', ReiniciarPlanView.as_view(), name='plan-ingesta-reiniciar'),
]