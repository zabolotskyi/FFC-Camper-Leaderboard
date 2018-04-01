import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchRecent, fetchAlltime } from './actions';
import { selectRecentCampers, selectAllTimeCampers } from './selectors';
//import * as pageActions from './actions';
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
        this.props.dispatch(fetchRecent());
      } else {
        this.props.dispatch(fetchAlltime());
      }
    }
  }

  render() {
    const { recentCampers, allTimeCampers } = this.props;
    const { filteredRecent } = this.state;
    let position = 0;
    const recentCampersList = this.props.recentCampers.map((camper) => {
      position++;
      return (
        <Camper camper={camper} key={camper.username} position={position} />
      );
    });
    const allTimeCampersList = this.props.allTimeCampers.map((camper) => {
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

const mapDispatchToProps = (dispatch) => {
  //
}

export default connect (mapStateToProps, mapDispatchToProps)(CamperList);