import { Action } from "redux";

export interface IStoreAction extends Action{
    payload?: any;
}
