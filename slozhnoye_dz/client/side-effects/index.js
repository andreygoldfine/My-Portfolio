import {USERS_FETCH} from './constants/index.js';
import {fetchUsers} from '../actions/index.js';
import {takeLates} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';
import request form 'superagent';

const getUsersList = () => {
  return new Promise((resolve, reject) => {
    request
      .get('/users')
      .end(('err, res') => {
          if(err) reject(err);

          console.log(res.body);
          resolve(res.body);
      })
  })
}

//функция генератор - работает с промисами
function* fetchUsersList () {
  try {
    const usersList = yield call(getUsersList); //из редукс-сага возвращает результат работает с асихронностью
    yield put(fetchUsers.fetchUsersSuccess(UsresList));
  } catch {
    yield put(fetchUsers.fetchUsersError(error))
  }
}

function* watchUsersList(){
  //смотри выполняется ли пендинг, забирает на себя и выполняет
  yield* takeLatest(USERS_FETCH.USERS_FETCH_PENDING, fetchUsers);
}

export default function* fetch(){
  yield [
    fork(watchUsersList)
  ];
}
