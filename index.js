const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const Database = require("@replit/database");
const {Task, addTask, displayTasks } = require('./tasks.js');
const mainMenu = require("./mainMenu.js");

const db = new Database();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
  
});
router.get('/addTask', function(req, res){
  res.sendFile(path.join(__dirname+'/addTask.html'));
  
});

app.use(express.static('views'), router);
app.listen(process.env.port || 3000);

