import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllTrucks } from '../Actions/foodTrucks';



class FoodTruckList extends Component {

  render() {

    // console.log('food truck list component inside render this props: ', this.props);
    // if(!this.props.foodTrucks) {
    //   return (
    //     <div>loading</div>
    //   )
    // } else {
    //   return (
    //     <div>
    //     hi
    //     </div>
    //   );
    //
    // }

    return (
      <div>
        { this.props.foodTrucks }
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    foodTrucks: state.foodTruckData
  }
}

export default connect(mapStateToProps, { fetchAllTrucks })(FoodTruckList);
