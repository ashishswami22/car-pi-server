from django.db import models

class OBDRecord(models.Model):
    speed_kmph = models.FloatField(default=0)
    rpm = models.FloatField(default=0)
    run_time_seconds = models.IntegerField(default=0)
    fuel_type = models.CharField(max_length=50, null=True)
    fuel_level_percent = models.FloatField(default=0)
    engine_load_percent = models.FloatField(default=0)
    throttle_percent = models.FloatField(default=0)
    ambiant_air_temp_celcius = models.FloatField(default=0)
    engine_oil_temp_celcius = models.FloatField(default=0)
    intake_air_temp_celcius = models.FloatField(default=0)
    coolant_temp_celcius = models.FloatField(default=0)
    timestamp = models.IntegerField(default=0)
    trip_id = models.IntegerField(default=0)

class Alert(models.Model):
    message = models.CharField(max_length=200)