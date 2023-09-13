from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import MedicamentoVitamina
from .serializers import MedicamentoVitaminaSerializer

class MedicamentoVitaminaListAPIView(APIView):
    def get(self, request):
        medicamentosvitaminas = MedicamentoVitamina.objects.all()
        serializer = MedicamentoVitaminaSerializer(medicamentosvitaminas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK) 

class DetalleMedicamentoVitaminaAPIView(APIView):
    def get(self, request, pk):
        try:
            medicamentovitamina = MedicamentoVitamina.objects.get(pk=pk)
            serializer = MedicamentoVitaminaSerializer(medicamentovitamina)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except MedicamentoVitamina.DoesNotExist:
            return Response({"error": "El medicamento o vitamina no existe."}, status=status.HTTP_404_NOT_FOUND)
        
class ActualizarMedicamentoVitaminaAPIView(APIView):
    def get_object(self, pk):
        try:
            return MedicamentoVitamina.objects.get(pk=pk)
        except MedicamentoVitamina.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def put(self, request, pk):
        medicamentovitamina = self.get_object(pk)
        serializer = MedicamentoVitaminaSerializer(medicamentovitamina, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CrearMedicamentoVitaminaAPIView(APIView):
    def post(self, request):
        serializer = MedicamentoVitaminaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EliminarMedicamentoVitaminaAPIView(APIView):
    def get_object(self, pk):
        try:
            return MedicamentoVitamina.objects.get(pk=pk)
        except MedicamentoVitamina.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def delete(self, request, pk):
        medicamentovitamina = self.get_object(pk)
        medicamentovitamina.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class TerminarMedicamentoVitaminaAPIView(APIView):
    def put(self, request, pk):
        try:
            vitamina = MedicamentoVitamina.objects.get(pk=pk)
        except MedicamentoVitamina.DoesNotExist:
            return Response({"error": "MedicamentoVitamina no existe"}, status=status.HTTP_404_NOT_FOUND)

        # Marcar la MedicamentoVitamina como finalizada (realizado=True)
        vitamina.realizado = True
        vitamina.save()

        return Response({"message": "MedicamentoVitamina ha sido finalizada exitosamente"}, status=status.HTTP_200_OK)