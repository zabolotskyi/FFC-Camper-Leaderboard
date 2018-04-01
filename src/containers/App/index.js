import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CamperList from '../CamperList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <CamperList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}