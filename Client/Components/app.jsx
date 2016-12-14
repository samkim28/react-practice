import React, { Component } from 'react';
import FoodTruckList from './foodTruckList';
import SearchBar from './searchBar';

export default class App extends Component {


	render() {
		return (
      <div>
			   <h1>Test test test</h1>
				 <SearchBar />
         <FoodTruckList />
      </div>
		);
	};
};
