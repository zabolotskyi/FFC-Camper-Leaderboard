import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSortingType } from './selectors';
import { fetchRecent, fetchAlltime } from './actions';

class TableHeader extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = () => {
    this.props.onFetchRecent();
  }

  sortCampers = (filter) => {
    if (filter !== this.props.campersSortingType) {
      if (filter === 'recent') {
        this.props.onFetchRecent();
      } else {
        this.props.onFetchAllTime();
      }
    }
  }

  handleSort = (fieldName) => type => {
    if (!type.target.classList.contains('sorted')) {
      let element = document.getElementsByClassName('sorted').item(0);
      element.className = 'text-center clickable';
      type.target.className = 'text-center sorted clickable';
      this.sortCampers(fieldName);
    } 
  }

  render() {
    const { campersSortingType } = this.props;
    return (
      <thead>
        <tr>
          <th id='col1' className='text-center'>#</th>
          <th id='col2' className='text-center'>Nickname</th>
          <th id='col3' className='text-center sorted clickable' onClick={this.handleSort('recent')}>Points in past 30 days</th>
          <th id='col4' className='text-center clickable' onClick={this.handleSort('alltime')}>All time points</th>
        </tr>
      </thead>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  campersSortingType: selectSortingType()
});

const mapDispatchToProps =  {
  onFetchRecent: fetchRecent,
  onFetchAllTime: fetchAlltime
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);