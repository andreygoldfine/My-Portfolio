import {USERS_FETCH} from '../constants/index.js';

export const fetchUsers = {
  fetchUsersPending: () => ({
    //Обязательное свойство, определяет, что нужно сделать
    type: USERS_FETCH.USERS_FETCH_PENDING
  }),
  fetchUsersSuccess: (usersList) => ({
    type: USERS_FETCH.USERS_FETCH_SUCCES,
    usersList
  }),
  fetchUsersError: (error) => ({
    type: USERS_FETCH.USERS_FETCH_ERROR,
    //возвращается это же свойство с содержимом аналог error: "какай-то ошибка"
    error
  })
}
