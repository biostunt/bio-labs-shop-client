import Style from './style.module.scss';
import PricePicker from './Pickers/PricePicker';



const SearchQuery = () => {
    return <div className={Style[`search-query`]}>
        <div className={Style['search-container']}>
            <PricePicker/>
        </div>
    </div>
}

export default SearchQuery;