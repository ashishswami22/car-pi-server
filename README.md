# car-pi-server commands

### You need a laptop / raspberry pi to run this code. Use a OBD to usb connector to connect to your car's OBD socket via computer's USB port. Then use below commands to start fetching data from your car!

- source env/bin/activate
- python manage.py makemigrations app (run this only in dev environment as the generated migrations need to be checked in)
- python manage.py migrate
- python manage.py runserver 0.0.0.0:80

