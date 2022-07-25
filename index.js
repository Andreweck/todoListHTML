const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');
const http = require('http');
const url = require('url');
const fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


const Database = require("@replit/database");
const {Task, addTask, displayTasks } = require('./tasks.js');
const mainMenu = require("./mainMenu.js");
//const { format } = require('path');

const db = new Database();
function fmt(arry, repFac){
  
  repFac = repFac.toString().split(',');
  let arr = arry.toString();
  let subStr="";
  let newArr=[];
  let addLett=false;
  for (let int = 0; int<arr.length; int++){
    if(addLett==true){
      subStr += arr[int];
    }
    if (arr[int]=='{'){
      subStr += arr[int];
      addLett=true;
    }
    if (arr[int]=='}'){
      addLett=false;
      newArr+=(subStr)+',';
      subStr = "";
    }
    
  }//
  newArr=newArr.slice(0,newArr.length-1);
  newArr=newArr.split(',');
  for (let i = 0;i<newArr.length;i++){
    if (arr.includes(newArr[i])){
      arr=arr.replaceAll(newArr[i], repFac[i])
    }
  }newArr=arr.split(',');
  return (newArr);
}

db.getAll().then(keys => {console.log(keys)
db.list().then(ids => {console.log(ids[0])


router.get('/', function(req, res){
  
  res.sendFile(path.join(`${__dirname}/index.html`));
  
});


router.get('/addTask', function(req, res){
  res.sendFile(path.join(`${
__dirname}/addTask.html`));
  
});

router.post('/addTask', urlencodedParser, function(req, res){
db.getAll().then(keys => {
  let int;
  let taskList = new Task(Object.keys(keys).length + 1, req.body.name, req.body.description, Date("Central"), false, null);
    db.set(taskList.id, [taskList.name, taskList.description, taskList.timeAdded, taskList.isComplete, taskList.timeCompleted]);
    
 
  }); 

  res.sendFile(path.join(__dirname+'/addTask.html'));})
router.get('/query', function (req,res){
    //req.body.serch;
    var strch = ' work!!!';
    const fle = `${__dirname}/query.html`
    //fs.writeFile(fle, fmt(strch, 'test'), { flag: '' }, err => {});
  const data = fs.readFileSync(fle, '').toString();
  const data1 =  (`${fmt(data, strch)}`);
  console.log(data1);

   
    res.send(data1);
});
router.get('/displayTasks', function (req,res){

  //let tsks = 
  
  const data3 = fs.readFileSync(`${__dirname}/displayTasks.html`, '').toString();
  var insertString = "";
  let toFormat  = `<tr>
    <td>{1}</td>
    <td>{2}</td>
    <td>{3}</td>
    <td>{4}</td>
    <td>{5}</td>
    <td>{6}</td>
  </tr>`;
  let id
  let trys
  for (let i = 1; i <= ids.length; i++){
    id = (i).toString();
    trys = id.concat(keys[i]);
   
  insertString+=fmt(toFormat, trys).toString()
    
  }
  
  
  
  const fl = fmt(data3, insertString).toString();
 // fs.writeFile(`${__dirname}/displayTasks.html`, data3, { flag: '' }, err => {});
  
  res.send(fl)
  
  
});

app.use(express.static('/'), router);
app.listen(process.env.port || 3000);
});});
