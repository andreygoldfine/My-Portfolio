import React, {Component} from 'react';
import request from 'superagent';

export default class User extends Component{
  constructor(props){
    super(props);
    this.removeUser = this.removeUser.bind(this)
    this.editUser = this.editUser.bind(this)

    this.state = {
      removeButton: false,
      name: this.props.name
    }
  }

  removeUser(){
      this.setState({removeButton: true}, () => {
        request
          .get('/users/' + this.props.userId)
          .end((err, res) => {
            if(err) return console.log(err)
            console.log(res.body)
          });
      });
	}

  editUser(){
    let newName = prompt('Введите новое имя: ');
    if(newName != null && newName != ''){
      this.setState({
        name: newName
      }, () =>{
        request
          .put('/users')
          .send({oldName: this.props.name, newName: newName})
          .end((err, res) => {
            if(err) return console.log(err)
            console.log('Замена произошла удачно');
          });
      })
    }
  }

  render(){

    return(
      <li className={(this.state.removeButton ? 'none' : '')}>
        {this.state.name}
         <button data-user={this.props.userId} onClick = {this.removeUser}>X</button>
         <button onClick={this.editUser}>Edit</button>
    </li>
    )
  }

}
