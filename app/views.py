from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Max
from app.models import OBDRecord
from django.core.exceptions import ObjectDoesNotExist

class OBDQueryView(APIView):
    def get(self, request, format=None):
        try:
            obdRecords = OBDRecord.objects.latest('trip_id')
            return Response(obdRecords)
        except ObjectDoesNotExist:
            return Response([])
