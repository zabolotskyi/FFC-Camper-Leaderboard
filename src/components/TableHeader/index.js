import React, { Component } from 'react';

export default class TableHeader extends React.Component {
  handleSort = (fieldName) => type => {
    if (!type.target.classList.contains('sorted')) {
      let element = document.getElementsByClassName('sorted').item(0);
      element.className = 'text-center';
      type.target.className = 'text-center sorted';
      this.props.sortCampers(fieldName);
    } 
  }
  render() {
    return (
      <thead>
        <tr>
          <th className='text-center'>#</th>
          <th className='text-center'>Nickname</th>
          <th className='text-center sorted' onClick={this.handleSort(true)}>Points in past 30 days</th>
          <th className='text-center' onClick={this.handleSort(false)}>All time points</th>
        </tr>
      </thead>
    );
  }
}