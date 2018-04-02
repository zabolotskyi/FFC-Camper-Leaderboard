import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCampers, selectSortingType } from './selectors';
import Camper from '../../components/Camper/index';
import TableHeader from '../../components/TableHeader/index';

class CamperList extends React.Component {

  render() {
    const { campersList } = this.props;
    const campers = campersList.map((camper, index) => {
      return (
        <Camper camper={camper} key={camper.username} position={++index} />
      );
    });
    return (
      <table className='table table-striped table-bordered main'>
        <TableHeader />
        <tbody>
          {campers}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  campersList: selectCampers()
});

export default connect(mapStateToProps)(CamperList);