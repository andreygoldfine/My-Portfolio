import {USERS_FETCH} from '../constants/index.js';

//createStore создает объект с состоянием
//combineReducers позволяет создатавать нскл редусеров и компоновать в один
import {createStore, combineReducers} from 'redux';

//состояние по умолчанию this.state
const defaultState{
  usersList: [],
  error: ''
}

//редюсер, ктр смотрит наши состояния
//action, что мы передаюм из actions
const reducer = (state = defaultState, actopm) => {
  switch (action.type) {
    case USERS_FETCH.USERS_FETCH_SUCCES:
      //Обновляем state в зависимости от типа
      return Object.assign({}, state, {usersList: action.usersList}) //Комбинирует в один объект нексколько,
    case USERS_FETCH.USERS_FETCH_ERROR:
      //Обновляем state в зависимости от типа
        return Object.assign({}, state, {error: action.error}) //Комбинирует в один объект нексколько,
    default:
      return state;
  }
}

export default combineReducers({reducer});
