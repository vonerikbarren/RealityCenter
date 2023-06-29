# Oliver Master Overview and Templates

The way that I want this to work primarily to practice my pseudocode skills is that every section needs to have a folder as a child. There will always be grandchildren => They are the files themself. The grandchild mkdir will always have a file=>pseudecode  and the correlating js files. It can be more than one. The point is have our logic at the different parts of the tree. That way when searching I will always have a reference.md or psuedo.md or overview.md to refer to. Example Below:

- mkdir Folder
  - mkdir FolderSub
    - touch file.md
    - touch file.js
  - mkdir FolderSub
    - mkdir FolderSubSub
      - touch file.md
      - touch file.js
  - mkdir FolderSub
    - mkdir FolderSubSub
      - mkdir FolderSubSubSub
        - touch file.md
        - touch file.js



# How to pseudocode
1. __Identify The Problem__
  - What exactly are we trying to solve?
  - What are we delivering?
2. __Conceptualize__
  - Look at the big picture
  - Avoid details
  - Whitebaors and pen-and-paper can be useful tools here
3. __Break It Down__
  - Break the conceptual models down into concrete steps / actionable items
  - Identify risks (e.g., gaps in knowledge and technology)
4. __Start Small, stay small__
  - Write code using those concrete steps
    - Very that each step achieves what we want before continuing on
    - If we do too much at once and things break, which they always do, we wont know what is causing the problem
    - Humans thrive on easy wins and forward progreses. Use this to your advantage.
5. __Examples__


*For More Information Check out PseudoCodeCheatSht.js*


# Bash Information
*put into node for necessary packages. Update as needed* 
``` bash 


npm install --save fs inquirer say cli-table chalk express

// Use in active projects
mkdir scripts data markdown javascript tests build templates


// Use for full stack projects
mkdir server client
npm i -y


// Use for Technology Studies
mkdir 00_Overview 01_Project1 02_Project2 03_Project3 04_Project4


// Use for React ParentA
mkdir 00-Overview 01-StructureFocused 02-DesignFocused 03-LogicFocused 04-PracticeStateClass 05





```



# import into js files

``` js
// [-+-Packages-+-]
const say = require('say');
const Oliver = require('inquirer');
const chalk = require('chalk');
const fs = require("fs");
const divider = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-";
const Divider = "###########################################################";
const BL = "[";
const BR = "]";
``` 



# JapLanguage Vocab

``` js

const Vocabulary = {
  PointWords: {
    wordT: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word0: {
      Jap: "これ",
      Rom: "Kore",
      Eng: "this one"
    },
    word1: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word3: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word4: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word5: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word6: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word7: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word8: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word9: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
    word10: {
      Jap: "",
      Rom: "",
      Eng: ""
    },
  }
}




```