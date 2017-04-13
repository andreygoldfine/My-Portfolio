const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

//подключаем массив пользователей
const usersArr = require('../server.js');

 router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({
 	extended: false
 }));

 router.route('/users')
  //Добавляет пользователя
 	.post((req, res) => {
	  //создаем Id
	  let id = Number(usersArr.usersArr[usersArr.usersArr.length - 1].id) + 1;
    //создаем объект пользователя
    let user = Object.assign({id: id}, req.body);
    usersArr.usersArr.push(user);
	 	res.send(usersArr.usersArr);
	 })
   //Редактирует пользователя
   .put((req, res) => {
     console.log('Hello from PUT route!');
     usersArr.usersArr.map((item) => {
       if(item.name == req.body.oldName){
         item.name = req.body.newName
       }
     })
     res.send(usersArr.usersArr);
   })

module.exports = router;
