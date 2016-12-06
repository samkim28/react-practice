import React, { Component } from 'react';
import FoodTruckList from './foodTruckList';

export default class App extends Component {
	constructor(props) {
		super(props)

	};

	render() {
		return (
      <div>
			   <h1>Test test test</h1>
         <FoodTruckList />
      </div>
		);
	};
};
