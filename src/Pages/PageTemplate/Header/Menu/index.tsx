import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStoreState } from '../../../../Store';
import MenuButton from './MenuButton';
import Style from './style.module.scss';


const Menu = () => {
    const pages = useSelector((state: IStoreState) => state.settings.pages);
    const userRole = useSelector((state: IStoreState) => state.user.role);

    const pageSorted = pages
        .sort((a, b) => a.listOrder - b.listOrder)
        .filter((page) => userRole === 'administrator' ? true : page.access === userRole);
    
    console.log(pageSorted);
    
    return (
        <div className={Style['menu-container']}>
            <div className={Style['button-container']}>
                {
                    pageSorted.map((page, i) => <MenuButton key={i + 1}  {...page}/>)
                }
            </div>
        </div>
    );
}

export default Menu;