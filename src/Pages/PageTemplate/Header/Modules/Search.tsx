import Style from '../style.module.scss';
import {Search} from 'semantic-ui-react';


const HeaderSearch = () => {
    return <Search placeholder='Search product' size='large' className={Style['header-bottom-line-search']} />
}

export default HeaderSearch;