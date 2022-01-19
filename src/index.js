import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
