
## My Bowling Scorecard

This is a project I worked on as a weekend challenge during my experience at Makers.
The idea is to create a Bowling Scorecard that can be used both from the browser console or in a visual way as a single web page app.
In the beginning I only worked on the back-end part in **JavaScript** and, only when it was tested and working in the console, I developed the front-end side using **HTML**, **JQuery**, **CSS** and **Bootstrap**.
Most challenging part: understanding the Bowling rules and planning how to tell JavaScript how to put them in practice!

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
To run tests type in the command line:
```
open SpecRunner.html
```
