import React, { Component } from 'react';

export default class Camper extends Component {
  render() {
    const { position, camper: { username, img, recent, alltime } } = this.props;
    return (
      <tr>
        <td className='text-center'>{position}</td>
        <td>
          <a href={`https://freecodecamp.com/${username}`} target='_blank'>
            <img className='img' src={img}/>
            <span>{username}</span>
          </a>
        </td>
        <td className='text-center'>{recent}</td>
        <td className='text-center'>{alltime}</td>
      </tr>
    );
  }
}