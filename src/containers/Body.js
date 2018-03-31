import React, { Component } from 'react';
import { connect } from 'react-redux';
import CamperList from './CamperList';
import { fetchRecent, fetchAlltime } from '../actions/actions';

class Body extends React.Component {

  constructor() {
    super();
    this.state = {
      filter: 'recent'
    }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchRecent());
  }

  sortCampers = (filter) => {
    if (filter !== this.state.filter) {
      this.setState({filter: filter});
      if (filter === 'recent') {
        this.props.dispatch(fetchRecent());
      } else {
        this.props.dispatch(fetchAlltime());
      }
    }
  }

  render() {
    const { recentCampers, allTimeCampers } = this.props;
    const { filter } = this.state;
    return (
      <CamperList 
        campers={}
        sortCampers={this.sortCampers}
      />
    );      
  }
}

const mapStateToProps = (state) => (
  { recentCampers: '', allTimeCampers: '' }
)

export default connect (mapStateToProps)(Body);