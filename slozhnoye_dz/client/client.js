//В клиент js приложения

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

//import {Provider} from 'react-redux';
//import {createStore, applyMiddleware} from 'redux';
//import createSageMiddleware from 'redux-saga';
//import reducer from './reducers/index.js';
//import sagas from './side-effects/index.js'

//const sagaMiddleware = createSageMiddleware;
//принимает редюсер, ктр мы создали
//const store = createStore(reducer, applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(sagas);

ReactDOM.render(
//  <Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById('root')
);
