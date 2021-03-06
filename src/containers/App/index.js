import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CamperList from '../CamperList';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <CamperList />
          </div>
        </div>
      </div>
    );
  }
}