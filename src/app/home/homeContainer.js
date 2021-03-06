import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './homeAction';
import HomeComponent from './homeComponent';

const mapStateToProps = (state) => {
  const appState = state.App;
  const homeState = state.Home;

  return {
    isLDReady: appState.isLDReady,
    ...homeState
  };
};

@connect(mapStateToProps, Actions)
export default class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}