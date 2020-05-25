# UNUSED SCRIPT. KEPT FOR REFERENCE.

import cv2
import datetime
from datetime import datetime

#Capture video from webcam
vid_capture = cv2.VideoCapture(0)
vid_cod = cv2.VideoWriter_fourcc(*'mp4v')
start_time = datetime.now()
output = cv2.VideoWriter("/var/www/html/recordings/" + start_time.strftime("%m_%d_%Y_%H_%M_%S") + ".mp4", vid_cod, 60, (640, 480))

while(True):
    # Capture each frame of webcam video
    ret,frame = vid_capture.read()
    if ret == True:
        cv2.putText(frame,
                    datetime.datetime.now().strftime('%m/%d/%Y %H:%M:%S'),
                    (50, 50),
                    font, 1,
                    (0, 0, 255),
                    2,
                    cv2.LINE_4)
        #frame2 = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        output.write(frame)

        if (datetime.now() - start_time).seconds > 10:
            break
    else:
        break

# close the already opened camera
vid_capture.release()
# close the already opened file
output.release()
# close the window and de-allocate any associated memory usage
cv2.destroyAllWindows()
# update file with recordings list
recordings_list = open("/var/www/html/recordings.txt","a+")
recordings_list.write("recordings/" + start_time.strftime("%m_%d_%Y_%H_%M_%S") + ".mp4,")
recordings_list.close()
