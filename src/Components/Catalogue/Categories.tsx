import { ICategory } from "../../Interfaces/Catalogue.interface";
import Category from "./Category";
import Style from './style.module.scss';


interface Props {
    items: Array<ICategory>;
}

const Categories = (props: Props) => {
    const { items } = props;
    return <div className={Style.categories}>
        {
            items.map((e, i) => <Category key={i + 1} {...e}/>)
        }
    </div>
}
export default Categories;