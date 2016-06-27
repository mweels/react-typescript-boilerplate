/// <reference path="../typings/tsd.d.ts" />
import Thunk from 'redux-thunk';
import { Promise } from 'es6-promise';

export enum ACTION { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_FAILURE }

export interface IBaseAction {
  type: ACTION;
}


export interface IAuthActions {
  type: ACTION;
  id: string;
  password: string;
}

export function Login_Submit(id: string, password: string): any {

  return function (dispatch) {

    new Promise(function (resolve, reject) {

      setTimeout(function () {
        console.log("Weee");
        reject("Weee");
      }, 2000);

    }).then(function () {
      console.log("Dispatching.success");
      dispatch(Login_Success())
    }).catch((err) => {
      console.log("Got err");
      dispatch(Login_Failure());
    });

  }
}

export function Login_Success(): IBaseAction {
  return { type: ACTION.LOGIN_SUCCESS };
};

export function Login_Failure(): IBaseAction {
  return { type: ACTION.LOGIN_FAILURE };
};

