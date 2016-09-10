import { combineReducers } from 'redux';
import App from './../appReducer';
import Home from './../home/homeReducer';

export default combineReducers({
  App,
  Home
});