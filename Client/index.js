import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/rootReducer';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import FoodTruckList from './Components/foodTruckList';
import App from './Components/app';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, applyMiddleware(logger));

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}



ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
  		<Route path='/' component={App} />
	  </Router>
	</Provider>, document.getElementById('main'));
