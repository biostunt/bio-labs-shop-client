import { SemanticICONS } from "semantic-ui-react";

export interface IPage {
    url: string;
    name: string;
    access: 'user' | 'administrator';
    listOrder: number;
    icon_name?: SemanticICONS;
}