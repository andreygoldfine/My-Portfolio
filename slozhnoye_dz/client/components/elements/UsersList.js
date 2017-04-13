import React, {Component} from 'react';
import User from './User.js'

export default class UsersList extends Component{
  render(){
    return(
      <ul>
        {console.log(this.props)}
        {this.props.users.map(function(item){
          return <User key={item.id} name={item.name} userId={item.id}/>
        })}
      </ul>
    )
  }
}
