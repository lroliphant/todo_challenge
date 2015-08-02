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
*
*
*
*



## Still to complete/refactor
*
* look into using local storage (in browser?)
* host on Node* include setup/running instructions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look better - CSS






Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```


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
