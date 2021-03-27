import { IStoreAction } from '../Interfaces';
import TYPE from './types';

type TUserRoles = 'user' | 'administrator';

const actionChangeUserRole = (role: TUserRoles) : IStoreAction => ({ type: TYPE.CHANGE_USER_ROLE, payload: role });

export const UserActions = {
    changeUserRole: actionChangeUserRole
}