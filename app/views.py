from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Max
from app.models import OBDRecord
from django.core.exceptions import ObjectDoesNotExist
from app.serializers import OBDRecordSerializer

class OBDQueryView(APIView):
    def get(self, request, format=None):
        try:
            latestObdRecord = OBDRecord.objects.latest('trip_id')
            return Response(OBDRecordSerializer(latestObdRecord).data)
        except ObjectDoesNotExist:
            return Response([])
