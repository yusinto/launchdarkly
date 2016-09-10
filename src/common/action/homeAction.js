import Constants from '../constant';
import {getRandomInt, homeFlags} from '../logic/homeLogic';

const setHomeFlags = flags => {
  return {
    type: Constants.SET_HOME_FLAGS,
    data: flags
  }
};

export const generateRandom = () => {
  return {
    type: Constants.GENERATE_RANDOM,
    data: getRandomInt(1, 100)
  }
};

export const initialiseHomeFlags = () => {
  return (dispatch, getState) => {
    const ldClient = getState().App.ldClient;
    const flags = {};

    for(let key in homeFlags) {
      console.log(`processing ${key} in homeFlags`);
      if(homeFlags.hasOwnProperty(key)) {
        // initialise each key
        flags[key] = ldClient.variation(key, homeFlags[key]);

        console.log(`flags.${key} is ${flags[key]}`);

        // and subscribe to changes
        ldClient.on(`change:${key}`, current => {
          const changedFlag = {};
          changedFlag[key] = current;

          console.log(`detected flag change: ${key}: new value ${current}`);
          dispatch(setHomeFlags(changedFlag));
        });
      }
    }

    dispatch(setHomeFlags(flags));
  };
};