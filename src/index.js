import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import rootSaga from './sagas/saga1';


const sagaMiddleware=createSagaMiddleware()
const store=createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action=type=>store.dispatch({type})
function render(){
ReactDOM.render(
    <Counter
    value={store.getState()}
    Increment={()=>action('Increment')}
    Decrement={()=>action('Decrement')}
    IncrementAsync={()=>action('IncrementAsync')}
    DecrementAsync={()=>action('DecrementAsync')}
    />,
  document.getElementById('root')
)
}

render() 
store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

