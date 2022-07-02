const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })


const Database = require("@replit/database");
const {Task, addTask, displayTasks } = require('./tasks.js');
const mainMenu = require("./mainMenu.js");

const db = new Database();

db.getAll().then(keys => {console.log(keys)});

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
  
});

router.get('/addTask', function(req, res){
  res.sendFile(path.join(__dirname+'/addTask.html'));
  
});

router.post('/addTask', urlencodedParser, function(req, res){
db.getAll().then(keys => {
  let int;
  let taskList = new Task(Object.keys(keys).length + 1, req.body.name, req.body.description, Date("Central"), false, null);
    db.set(taskList.id, [taskList.name, taskList.description, taskList.timeAdded, taskList.isComplete, taskList.timeCompleted]);
    
 
  }); 

  res.sendFile(path.join(__dirname+'/addTask.html'));})
app.use(express.static('/'), router);
app.listen(process.env.port || 3000);

