import { UserActions } from './User/actions';

export const Actions = {
    userActions: UserActions
}

export type TStoreAction = typeof Actions;

export default Actions;