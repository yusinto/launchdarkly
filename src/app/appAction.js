import ldClient from 'ldclient-js';
import Constants from './common/constant';

export const initialiseLD = () => {
  // use redux-thunk for async action
  return dispatch => {
    /**
     * Launch darkly provides a comprehensive suite of targeting and
     * rollout options. Targeting and rollouts are based on the user
     * viewing the page, so we must pass a user at initialisation time.
     *
     * The user object can contain these properties:
     * key, ip, firstName, lastName, country, email, avatar, name,
     * anonymous.
     *
     * The only mandatory property is "key". All the others are
     * optional. You can also specify custom properties using the
     * "custom" property name like company and authorOf properties below.
     *
     * For more info on users, check here:
     * http://docs.launchdarkly.com/docs/js-sdk-reference#users
    */
    const user = {
      "key": "deadbeef", // MANDATORY!
      "firstName": "John",
      "lastName": "Carmack",
      "email": "jcarmack@doom.com",

      // specify custom properties here. These will appear
      // automatically on the dashboard.
      "custom": {
        "company": "ID Software",
        "authorOf": ["doom", "quake"]
      }
    };

    // Actual work done here. You'll need to use your environment id as
    // configured in your dashboard
    const client = ldClient.initialize('57a55163b14b9907200fa40e', user);

    // The client will emit an "ready" event when it has finished
    // initialising. At that point we want to store that client
    // object in our redux state. Do this by dispatching an action
    // with the client object as the argument to be stored in app state.
    client.on('ready', () => {
      dispatch(setLDReady(client));
    });
  };
};

/**
 * Stores launch darkly client object in app state
 */
export const setLDReady = ldClient => {
  return {
    type: Constants.LD_READY,
    data: ldClient
  }
};