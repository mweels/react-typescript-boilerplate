/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./require.ts"/>

require("file!../bower_components/riot/riot.js");

require("./components/index.tag");
require("./components/authentication/idpassword.tag");

import { Store, createStore, applyMiddleware} from 'redux';
import { default as appReducers } from './reducers';
import * as _ from 'lodash';
import Thunk from 'redux-thunk';

const store: Store = configureStore();

function configureStore(): Store {
 return createStore(appReducers, applyMiddleware(Thunk));
}

store.subscribe(function () {
  localStorage.setItem('state', JSON.stringify(store.getState()));
  console.log(store.getState());
});

riot.mount('index', { store: store });
