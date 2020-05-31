# Aptitude Exam
Aptitude exam is a mock test website for MCQs based questions mainly inspired by the MCQ exams held in colleges. 
All information is served by a private API I built whos GitHub repository is linked [here](https://github.com/shamoilarsi/Aptitude-Exam-Server).

### Features:
* has a login option where students can log in with their id and password.
* after logging in, the student is asked what category does he want to give the exam in.
* the request for MCQs is sent to the API which returns a JSON object.
* this JSON is parsed to be shown one at a time in the main exam region.
* A timer is started after which the exam will auto-submit.
* MCQ question and the options are displayed. The selected option turns green.
* Questions can be marked for review.
* An overview button shows all question numbers and gives details as to if they're answered and if they're marked for review.
* On submitting, your result is calculated with answers to all questions with explanations.
* also on submitting, your result is sent to the server to be stored in the file.

### Purpose of the app?
I developed this mock test website mainly to get my hands dirty with React.js and web development in general. 

### Demo
Website is live on - https://aptitude-exam.web.app/ 

You can find a video showing the flow of the website on [LinkedIn](https://www.linkedin.com/posts/shamoilarsi_react-js-reactjs-activity-6672944308586475520-TYM2)
