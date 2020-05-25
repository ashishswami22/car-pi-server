from app.models import OBDRecord
from rest_framework import serializers


class OBDRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = OBDRecord

