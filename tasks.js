const input = require('readline-sync');
const Database = require("@replit/database");

class Task{
  constructor(id, name, description, timeAdded, isComplete, timeCompleted){
    this.id = id;
    this.name = name;
    this.description = description;
    this.timeAdded = timeAdded;
    this.isComplete = isComplete;
    this.timeCompleted = timeCompleted;

}
}

function addTask(db){
  const mainMenu = require('./mainMenu.js');
  db.getAll().then(keys => {
  let int;
  let taskList = new Task(Object.keys(keys).length + 1, taskName, taskDescription, Date("Central"), false, null);
    db.set(taskList.id, [taskList.name, taskList.description, taskList.timeAdded, taskList.isComplete, taskList.timeCompleted]);
    mainMenu(db);
 
  }); 
  
}
function displayTasks(db){
  const mainMenu = require('./mainMenu.js');
  db.getAll().then(kys => {console.log(kys); db.list().then(keys => {console.log(keys.length)
  let choice2 = input.question("Which task do you wish to select?");
  let intrusiveint1 = Number(choice2);

db.get(choice2).then(keys => {console.log(keys);
                             let nme = keys[0];
                             let desc = keys[1];
                             let time = keys[2];
                             console.log("What do you wish to do with this?\n1: Complete Task\n2: Edit Task\n3: Delete Task\n4: Go Back");
                             let choice3 = input.question();
choice3 = Number(choice3);
                              if (choice3 === 1){
                             db.set(choice2, [nme, "GOOD JOBBB!!!!",                               time, true, Date()]);
                              }
                              else if (choice3 === 2){
                                
                              }
                              else if (choice3 === 3){
                             db.delete(choice2);
                                mainMenu(db);
                             
                              }
                             
                             
                             });
                   
                          
                           })}); 
  
}
module.exports = {Task: Task,
                 addTask: addTask,
                 displayTasks: displayTasks};
  //{id: }