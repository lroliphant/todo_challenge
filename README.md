Todo Challenge
===================


## Synopsis

Build a Todo list as a mini front-end application, ensuring you have well written, well structured acceptance and unit tests; clear and expressive JavaScript and good HTML5 markup.


## Technologies Used
- JavaScript
- Angular
- HTML5, CSS
- Karma, Protractor
- Node, Express



## Job List
* Add functionality (input field and add button) to create tasks and add to To Do List
* Add option to remove/delete tasks from To Do List
* Add task count display that updates when tasks are added and removed
* Add functionality to mark each task as complete
* Add button so that users can remove all tasks previously marked as complete



## Still to complete/refactor

* Edit functionality - so users can edit the existing tasks on the list (rather than deleting and adding again)
* Add ability to filter tasks by "All", "Active", "Complete"
* Look into using local storage (in browser?)
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look better - CSS
* Improve form validation - add in custom form validation
* Rewrite removeCompleteTasks function to remove use of underscore JS library for the filter functionality



## To Run:

* Clone repo to your machine - git clone https://github.com/lroliphant/todo_challenge
* cd into directory cd todo_challenge
* Run: npm install and bower install
* Run: npm start
* To run testing suites:

**Karma Tests:**
* karma start test/karma.conf.js

**Protractor Tests:**
* node server.js
* webdriver-manager update
* webdriver-manager start
* protractor test/e2e/conf.js
