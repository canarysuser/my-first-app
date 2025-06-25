import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
//import {legacy_createStore} from "redux"
import { Provider } from "react-redux"
import storeConfig from './store/store-config';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
//console.log(store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// const initialState= { 
//   todos: []
// }
// const Add_Item='ADD_ITEM'; 
// function addTodoActionCreator(item) { 
//   return {type:Add_Item, payload:item}
// }
// function todoReducer(state, action) { 
//   state = state || initialState; 
//   if(action.type===Add_Item) { 
//     state.todos.push(action.payload); 
//     return {...state}
//   }
//   return state;
// }

// const store = legacy_createStore(todoReducer);
// // attach the object to the window object 

// window.store = store; 
// window.addTodo = addTodoActionCreator; 




