const input = require('readline-sync');
const Database = require("@replit/database");
const { Task, addTask, displayTasks } = require('./tasks.js');

function mainMenu(db){

let optionList = ["1: Add Task", "2: Reference/Edit", "3: Clear Tasks" ];
console.log("Options: (Type only the number of your choice!!!)");
for (let i = 0; i < optionList.length; i++){
  console.log(optionList[i]);
}

var int1;
let choice1 = input.question("Choice:");
int1 = Number(choice1) - 1;

if (optionList[int1] === undefined){
  console.log("Out of Range!!")
}
else{
  for (let i = 0; i < optionList.length; i++){
    if (choice1 === optionList[i][0]){
      console.log(optionList[int1]);
    }
  }
}
if (choice1 === "1"){
  addTask(db);

  
}
else if(choice1 === "2"){

  displayTasks(db);
  

}
  else if(choice1 == "3"){
    db.empty();
  }
}


module.exports = mainMenu;