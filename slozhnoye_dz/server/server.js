const express = require('express');
const path = require('path');

const app = express();

//req - получаемые данные
//res - отправляемые данные

//массив пользователей
let usersArr = [
	{ id: '1', name: 'Вася'},  //image: 'http://savepic.ru/13390195.jpg', phone: 79274641937},
	{ id: '2', name: 'Петя'}, //image: 'http://savepic.ru/13382003.jpg', phone: 79358657658},
	{ id: '3', name: 'Дима'}, //image: 'http://savepic.ru/13374835.jpg', phone: 78657986578},
	{ id: '4', name: 'Ололоша'} //image: 'http://savepic.ru/13420914.png', phone: 78568957657}
]

//Для статических файлов
app.use('/static', express.static(path.join(__dirname, '../static')));

//Добавляет пользователя
app.post('/users', require('./routes/users.js'));
//Возвращает массив пользователей
app.get('/users/all', (req, res) => {
	res.send(usersArr);
});
//Удаляет пользователя
app.get('/users/:id', function (req, res) {
	usersArr = usersArr.filter((item) => {
		if(item.id != req.params.id) return item;
	});
  res.send(usersArr)
});
//Редактирует пользователя
app.put('/users', require('./routes/users.js'))
//подключает главный файл
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(8080, () => {
	console.log('Сервер запущен порт 8080');
});

exports.usersArr = usersArr;
