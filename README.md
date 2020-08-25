
## My Bowling Scorecard

This is a project I worked on as a weekend challenge during my experience at Makers.<br>
The idea was to create a Bowling Scorecard allowing the user to keep track of their score throughout a match. This web app is designed to be very intuitive and easy to use.<br>
When I started working on this project I spent a relevant amount of time planning. I did not know the bowling score calculation rules and, once I understood them, I had to find a way to gently ask JavaScript to help me out :smile:. <br>
I began from the back-end and I created a client-side app. I haven't started working on the front-end until my app was perfectly working on the console. <br>
***Tech stack*** | JavaScript | Jasmine | JQuery | HTML | CSS | Bootstrap


#### PROJECT SETUP
I used **Jasmine** as a testing framework and **ESLint** as a code linter.

To install Jasmine:
- download the latest version of Jasmine Stand Alone from: https://github.com/jasmine/jasmine/releases 
- unzip the file and copy the content inside the working directory
- modify the SpecRunner.html file and the files inside the src and spec folders accordingly
To install ESLint for VSC:
- download the extension and follow the indicated procedure

To make sure that ESLint is collaborating with Jasmine spec files, in the ESlint.json file make sure you indicate the following:
```
    "env": {
        "browser": true,
        "es2020": true,
        "jasmine": true
    },
```
To run tests and use the program in the browser console type in the command line:
```
open SpecRunner.html
```
