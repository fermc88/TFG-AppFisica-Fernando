from django.urls import path
from .views import ActividadListAPIView, ActividadDetailAPIView, ActividadCreateAPIView, ActividadUpdateAPIView, ActividadFinishAPIView, ActividadDeleteAPIView

urlpatterns = [
    path('actividades/', ActividadListAPIView.as_view(), name='actividad-list'),
    path('actividades/<int:pk>/', ActividadDetailAPIView.as_view(), name='actividad-detail'),
    path('actividades/crear/', ActividadCreateAPIView.as_view(), name='actividad-create'),
    path('actividades/<int:pk>/editar/', ActividadUpdateAPIView.as_view(), name='actividad-update'),
    path('actividades/<int:pk>/eliminar/', ActividadDeleteAPIView.as_view(), name='actividad-delete'),
    path('actividades/<int:pk>/finalizar/', ActividadFinishAPIView.as_view(), name='actividad-finalizar'),

]