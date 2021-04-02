import Style from './style.module.scss';
import Logo from './concept.png';
import { Icon } from 'semantic-ui-react';
import Catalogue from './Modules/Catalogue';
import Search from './Modules/Search';
import User from './Modules/User';
import Cart from './Modules/Cart';
import ControlPanel from './Modules/ControlPanel';


const Bottom = () => {
    return (
        <div className={Style['header-bottom']}>
            <div className={Style['header-bottom-line-link']}>
                <img className={Style['header-bottom-line-logo']} src={Logo} alt='' />
            </div>
            <Catalogue/>
            <Search />
            <ControlPanel/>
            <div className={Style['header-bottom-line-link']}>
                <Icon size='small' name='diamond'/>
                Bonuses
            </div>
            <User/>
            <div className={Style['header-bottom-line-link']}>
                <Icon size='small' name='bookmark'/>
                Bookmarks
            </div>
            <Cart/>
        </div>
    )
}

export default Bottom;