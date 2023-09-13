from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Actividad
from .serializers import ActividadSerializer

class ActividadListAPIView(APIView):
    def get(self, request):
        actividades = Actividad.objects.all()
        serializer = ActividadSerializer(actividades, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ActividadDetailAPIView(APIView):
    def get(self, request, pk):
        try:
            actividad = Actividad.objects.get(pk=pk)
        except Actividad.DoesNotExist:
            return Response({"error": "La actividad no existe."}, status=status.HTTP_404_NOT_FOUND)

        serializer = ActividadSerializer(actividad)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ActividadDeleteAPIView(APIView):
    def delete(self, request, pk):
        try:
            actividad = Actividad.objects.get(pk=pk)
        except Actividad.DoesNotExist:
            return Response({"error": "La actividad no existe."}, status=status.HTTP_404_NOT_FOUND)

        actividad.delete()
        return Response({"message": "La actividad ha sido eliminada."}, status=status.HTTP_204_NO_CONTENT)
    
class ActividadUpdateAPIView(APIView):
    def put(self, request, pk):
        try:
            actividad = Actividad.objects.get(pk=pk)
        except Actividad.DoesNotExist:
            return Response({"error": "La actividad no existe."}, status=status.HTTP_404_NOT_FOUND)

        serializer = ActividadSerializer(actividad, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ActividadCreateAPIView(APIView):
    def post(self, request):
        serializer = ActividadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class ActividadFinishAPIView(APIView):
    def put(self, request, pk):
        try:
            actividad = Actividad.objects.get(pk=pk)
        except Actividad.DoesNotExist:
            return Response({"error": "La actividad no existe"}, status=status.HTTP_404_NOT_FOUND)

        # Marcar la actividad como finalizada (realizado=True)
        actividad.realizado = True
        actividad.save()

        return Response({"message": "La actividad ha sido finalizada exitosamente"}, status=status.HTTP_200_OK)