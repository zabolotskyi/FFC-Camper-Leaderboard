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
      filteredRecent: true
    }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchRecent());
  }

  sortCampers = (filter) => {
    if (filter !== this.state.filteredRecent) {
      this.setState({filteredRecent: filter});
      if (filter) {
        this.props.onFetchRecent();
      } else {
        this.props.onFetchAllTime();
      }
    }
  }

  render() {
    const { recentCampers, allTimeCampers } = this.props;
    const { filteredRecent } = this.state;
    let position = 0;
    const recentCampersList = recentCampers.map((camper) => {
      position++;
      return (
        <Camper camper={camper} key={camper.username} position={position} />
      );
    });
    const allTimeCampersList = allTimeCampers.map((camper) => {
      position++;
      return (
        <Camper camper={camper} key={camper.username} position={position} />
      );
    });
    return (
      <table className='table table-striped table-bordered main'>
        <TableHeader sortCampers={this.props.sortCampers} />
        <tbody>
          {filteredRecent && recentCampersList}
          {!filteredRecent && allTimeCampersList}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recentCampers: selectRecentCampers(),
  allTimeCampers: selectAllTimeCampers()
});

const mapDispatchToProps =  {
  onFetchRecent: fetchRecent,
  onFetchAllTime: fetchAlltime
}

export default connect (mapStateToProps, mapDispatchToProps)(CamperList);