from rest_framework.views import APIView
from django.db import transaction
from rest_framework.response import Response
from rest_framework import status
from ..models import ControlAgua
from .serializers import ControlAguaSerializer

class IngestaAguaPendienteListAPIView(APIView):
    def get(self, request):
        # Verifica si existe un plan de ingesta creado
        try:
            plan = ControlAgua.objects.latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            return Response({'message': 'No hay plan de ingesta creado'}, status=status.HTTP_404_NOT_FOUND)
        
        # Serializa los datos del plan de ingesta
        serializer = ControlAguaSerializer(plan)
        return Response(serializer.data)
    
class PlanIngestaCrearView(APIView):
    def post(self, request):
        # Verificar si ya existe un plan de ingesta creado para el usuario
        if ControlAgua.objects.filter(realizado=False).exists():
            return Response({'message': 'Ya existe un plan de ingesta en curso'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ControlAguaSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IncrementarVasosTomadosView(APIView):
    def post(self, request):
        # Obtener el último plan de ingesta de agua no realizado
        try:
            plan = ControlAgua.objects.filter(realizado=False).latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            return Response({'message': 'No hay plan de ingesta en curso'}, status=status.HTTP_404_NOT_FOUND)
        
        # Incrementar el valor de vasos_tomados en 1
        plan.vasos_tomados += 1
        plan.save()
        
        serializer = ControlAguaSerializer(plan)
        return Response(serializer.data)
    
class RestarVasosTomadosView(APIView):
    def post(self, request):
        # Obtener el último plan de ingesta de agua no realizado
        try:
            plan = ControlAgua.objects.filter(realizado=False).latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            return Response({'message': 'No hay plan de ingesta en curso'}, status=status.HTTP_404_NOT_FOUND)
        
        # Restar 1 al valor de vasos_tomados
        plan.vasos_tomados -= 1
        if plan.vasos_tomados < 0:
            plan.vasos_tomados = 0
        plan.save()
        
        serializer = ControlAguaSerializer(plan)
        return Response(serializer.data)

class EditarPlanActivoView(APIView):
    def put(self, request):
        # Obtener el último plan de ingesta de agua no realizado
        try:
            plan = ControlAgua.objects.filter(realizado=False).latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            return Response({'message': 'No hay plan de ingesta en curso'}, status=status.HTTP_404_NOT_FOUND)
        
        # Actualizar la meta de ingesta de vasos y la preferencia de notificaciones
        plan.meta_intake_vasos = request.data.get('meta_intake_vasos', plan.meta_intake_vasos)
        plan.notificacion = request.data.get('notificacion', plan.notificacion)
        plan.save()
        
        serializer = ControlAguaSerializer(plan)
        return Response(serializer.data)
    
class FinalizarPlanView(APIView):
    def post(self, request):
        # Obtener el último plan de ingesta de agua no realizado
        try:
            plan = ControlAgua.objects.filter(realizado=False).latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            return Response({'message': 'No hay plan de ingesta en curso'}, status=status.HTTP_404_NOT_FOUND)
        
        # Marcar el plan como realizado
        plan.realizado = True
        plan.save()
        
        serializer = ControlAguaSerializer(plan)
        return Response(serializer.data)
        
class ReiniciarPlanView(APIView):
    def post(self, request):
        # Obtener el último plan de ingesta de agua no realizado
        try:
            plan = ControlAgua.objects.filter(realizado=True).latest('fecha_creacion')
        except ControlAgua.DoesNotExist:
            plan = None

        # Eliminar el plan existente
        if plan:
            plan.delete()

        # Crear un nuevo plan
        nuevo_plan = ControlAgua()
        nuevo_plan.meta_intake_vasos = request.data.get('meta_intake_vasos', 10)
        nuevo_plan.notificacion = request.data.get('notificacion', False)
        nuevo_plan.save()

        serializer = ControlAguaSerializer(nuevo_plan)
        return Response(serializer.data, status=status.HTTP_201_CREATED)