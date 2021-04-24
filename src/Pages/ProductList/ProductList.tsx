import Style from './style.module.scss';
import SearchQuery from './SearchQuery/SearchQuery';

interface Props { };

const ShoppingList = (props: Props) => {
    return (
        <div className={Style.container}>
            <SearchQuery />
            <div className={Style.content}></div>
        </div>
    )
}

export default ShoppingList;