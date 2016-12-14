import React, { Component } from 'react';
import { fetchAllTrucks } from '../Actions/foodTrucks';
import { connect } from 'react-redux';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.submitEntry = this.submitEntry.bind(this);

  }

  submitEntry(e) {
    e.preventDefault();
    this.props.fetchAllTrucks(e.target.facilityType.value);
  }

  render(){
    return(
      <div>
      <form onSubmit={this.submitEntry} >
        <input type="text" name="facilityType"/>
        <input type="submit" />
      </form>
      </div>
    )
  }
}


export default connect(null, { fetchAllTrucks })(SearchBar);
