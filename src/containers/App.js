import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Body from './Body';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Body />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}