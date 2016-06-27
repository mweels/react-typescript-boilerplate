/// <reference path="../../typings/tsd.d.ts" />

import { BaseElement } from '../baseElement';
import * as actions from '../actions';
import { GlobalStore } from '../storebuilder';

class IndexLocalStore {
  constructor() { }
}

export default class CodeBehind extends BaseElement<IndexLocalStore>  {
  constructor() {
    super();
  }

  init = function () {
    this.doInit();
  }

  getLocalStore: any = function (store: any) {
    let h: GlobalStore = <GlobalStore>store.globalStore;
    return new IndexLocalStore();
  };

}

