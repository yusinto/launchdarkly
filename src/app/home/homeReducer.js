import Constants from '../common/constant';
import {homeFlags} from './homeLogic';

const defaultState = {
  randomNumber: 0,
  ...homeFlags
};

export default function App(state = defaultState, action) {
  switch (action.type) {
    case 'SET_INITIAL_NUMBER':
      return Object.assign({}, state, {randomNumber: action.data});

    case Constants.GENERATE_RANDOM:
      return Object.assign({}, state, {randomNumber: action.data});

    case Constants.SET_HOME_FLAGS:
      return Object.assign({}, state, action.data);

    default:
      return state;
  }
}