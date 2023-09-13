from rest_framework import serializers
from ..models import ControlAgua

class ControlAguaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlAgua
        fields = ('id', 'fecha_creacion', 'meta_intake_vasos', 'vasos_tomados', 'notificacion', 'realizado')
        read_only_fields = ('id', 'fecha_creacion')
