from django.db import models

class OBDRecord(models.Model):
    speed = models.FloatField(default=0)
    speed_unit = models.CharField(max_length=20)
    rpm = models.FloatField(default=0)
    rpm_unit = models.CharField(max_length=20)
    timestamp = models.IntegerField(default=0)
    trip_id = models.IntegerField(default=0)
