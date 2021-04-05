import { ICategory } from "../../Interfaces/Catalogue.interface";


interface Props extends ICategory { };

const Category = (props: Props) => {
    return <a href="" className="">
        {props.name}
    </a>
}

export default Category;