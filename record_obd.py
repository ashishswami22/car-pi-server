
import sqlite3
import obd

def new_rpm(r):
    print(r.value)

# BEGIN - CODE TO CONTINUOUSLY LISTEN AND RECORD OBD DATA

connection = obd.Async() # same constructor as 'obd.OBD()'
connection.watch(obd.commands.RPM, callback=new_rpm)
connection.start() # start the async update loop

conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()
# for i in range(1,100):
    # cursor.execute("insert into app_obdrecord values (" + str(i) + ", " + str(i) + ")")
cursor.execute("SELECT * from app_obdrecord")
print(list(map(lambda x: x[0], cursor.description))) # column names
print(cursor.fetchall())

# END - CODE TO CONTINUOUSLY LISTEN AND RECORD OBD DATA