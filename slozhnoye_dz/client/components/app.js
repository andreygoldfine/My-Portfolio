import React, {Component} from 'react';
import request from 'superagent';
import UsersList from './elements/UsersList.js';

export default class App extends Component{
	constructor(props){
		super(props);

		this.changeInput = this.changeInput.bind(this);
		this.addButtonHandler = this.addButtonHandler.bind(this);

		this.state = {
			usersArr: [],
			myValue: ''
		}

	}

	//Получаем список пользователей
	componentDidMount(){
		request
			.get('/users/all')
			.end((err, res) => {
				if(err) return console.log("Ошибка запроса GET/all: ", err);
					this.setState({usersArr: res.body});
			});
			console.log(this.state.usersArr);
	}

	changeInput(e){
		this.setState({
			myValue: e.target.value
		})
	}

	addButtonHandler(){
		request
			.post('/users')
			.send({name: this.state.myValue})
			.end((err, res) => {
				if(err) return console.log("Ошибка запроса POST: ", err);
					this.setState({usersArr: res.body});
			})
	}

	render(){

		return (
				<div>
					<UsersList users={this.state.usersArr} />
					<input type="text" value={this.state.myValue} onChange={this.changeInput} />
					<button onClick={this.addButtonHandler}>Добавить пользователя</button>
				</div>
		)
	}
}
