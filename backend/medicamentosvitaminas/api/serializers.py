from rest_framework import serializers
from ..models import MedicamentoVitamina

class MedicamentoVitaminaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicamentoVitamina
        fields = '__all__'