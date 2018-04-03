import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCampers, selectSortingType } from './selectors';
import { fetchRecent } from './actions';
import Camper from './Camper';
import TableHeader from './TableHeader';

class CamperList extends Component {

  componentDidMount = () => {
    this.props.onFetchRecent();
  }

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

const mapDispatchToProps = {
  onFetchRecent: fetchRecent
};

export default connect(mapStateToProps, mapDispatchToProps)(CamperList);