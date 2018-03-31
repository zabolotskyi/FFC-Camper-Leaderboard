import React, { Component } from 'react';

export default class Camper extends React.Component {
  render() {
    return (
      <tr>
        <td className='text-center'>{this.props.position}</td>
        <td>
          <a href={'https://freecodecamp.com/' + this.props.camper.username} target='_blank'>
            <img className='img' src={this.props.camper.img}/>
            <span>{this.props.camper.username}</span>
          </a>
        </td>
        <td className='text-center'>{this.props.camper.recent}</td>
        <td className='text-center'>{this.props.camper.alltime}</td>
      </tr>
    );
  }
}