/// <reference path="../typings/tsd.d.ts" />

import { Reducer, combineReducers } from 'redux';
import * as actions from './actions';
import * as _ from 'lodash';
import { GlobalStore } from './storeBuilder';

function authActions(state: GlobalStore, action: actions.IAuthActions): GlobalStore {

  if (!state)
    state = new GlobalStore();

  var loggedIn = state.LoggedIn;

  let mutated: GlobalStore = <GlobalStore>_.merge(state, new GlobalStore());

  if (!state && localStorage.getItem('globalStorage')) {
    mutated = JSON.parse(localStorage.getItem('globalStorage')).helloWorld;
  }

  switch (action.type) {
    case actions.ACTION.LOGIN_SUBMIT:
      {
        mutated.LoggedIn_InProcess = true;
        return mutated;
      }
    case actions.ACTION.LOGIN_SUCCESS: {

      state.LoggedIn = !loggedIn;
      return state;
    }
    case actions.ACTION.LOGIN_FAILURE: {

      state.LogInError = true;
      return state;
    }
    default: {
      console.log("Couldnt handle action " + action.type);
      return mutated;
    }


  }
}

export default combineReducers({ authActions });
