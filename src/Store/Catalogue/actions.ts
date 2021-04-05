import { IGroup } from "../../Interfaces/Catalogue.interface";
import TYPE from './types';



const actionChangeGroups = (groups: Array<IGroup>) => ({ type: TYPE.ON_GROUPS_CHANGED, payload: groups });


export const CatalogueActions = {
    changeGroups: actionChangeGroups,
}