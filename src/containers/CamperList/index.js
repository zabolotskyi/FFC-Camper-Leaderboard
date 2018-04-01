import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchRecent, fetchAlltime } from './actions';
import { selectRecentCampers, selectAllTimeCampers } from './selectors';
import Camper from '../../components/Camper/index';
import TableHeader from '../../components/TableHeader/index';

class CamperList extends React.Component {

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
    let position = 0;
    let campersList = this.props.campers.map((camper) => {
      position++;
      return (
        <Camper camper={camper} key={camper.username} position={position} />
      );
    });

    return (
      <table className='table table-striped table-bordered main'>
        <TableHeader sortCampers={this.props.sortCampers} />
        <tbody>
          {campersList}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recentCampers: selectRecentCampers(),
  allTimeCampers: selectAllTimeCampers()
});

export default connect (mapStateToProps)(CamperList);