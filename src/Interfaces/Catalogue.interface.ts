export interface ICategory {
    id: number;
    name: string;
    
}

export interface IGroup {
    id: number;
    name: string;
    categories: ICategory[];
}