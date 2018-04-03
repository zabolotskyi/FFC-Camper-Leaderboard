import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSortingType } from '../selectors';
import { fetchRecent, fetchAlltime } from '../actions';

class TableHeader extends Component {

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
      element.className = 'text-center clickable col-md-3';
      type.target.className = 'text-center sorted clickable col-md-3';
      this.sortCampers(fieldName);
    } 
  }

  render() {
    const { campersSortingType } = this.props;
    return (
      <thead>
        <tr>
          <th className='text-center col-md-1'>#</th>
          <th className='text-center col-md-5'>Nickname</th>
          <th className='text-center sorted clickable col-md-3' onClick={this.handleSort('recent')}>Points in past 30 days</th>
          <th className='text-center clickable col-md-3' onClick={this.handleSort('alltime')}>All time points</th>
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