import React, { Component } from 'react';
import Camper from '../components/Camper';
import TableHeader from '../components/TableHeader';

export default class CamperList extends React.Component {
  render() {
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