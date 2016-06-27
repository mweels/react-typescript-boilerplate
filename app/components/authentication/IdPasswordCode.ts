/// <reference path="../../../typings/tsd.d.ts" />

import { BaseElement } from '../../baseElement';
import * as actions from '../../actions';
import { GlobalStore } from '../../storebuilder';

class IdPasswordStore {
  constructor(public loggedIn: boolean, public hasError: boolean) { }
}

export default class CodeBehind extends BaseElement<IdPasswordStore>  {
  constructor() {
    super();
  }

  init = function () {
    this.doInit();
  }


  getLocalStore: any = function (store: any) {
    
    var h: GlobalStore = <GlobalStore>store.authActions;  
    return new IdPasswordStore(h.LoggedIn,h.LogInError);
  };

  login: any = function () {
    this.reduxCore.dispatch(actions.Login_Submit(this.id.value, this.password.value));
    return false;    
  };

}


