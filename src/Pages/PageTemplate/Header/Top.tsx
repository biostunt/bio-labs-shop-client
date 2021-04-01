import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Style from './style.module.scss';


const Top = () => {
    return (
        <div className={Style['header-top']}>
            <Link to='/location' className={Style['header-top-line-link']}>
                <Icon size='small' name='location arrow'/>
                Moscow
            </Link>
            <Link to='/adresses' className={Style['header-top-line-link']}>Adresses</Link>
            <Link to='/delivery'className={Style['header-top-line-link']}>Delivery</Link>
            <div className={Style['header-top-line-separator']}></div>
            <Link to='/credit' className={Style['header-top-line-link']}>Credit</Link>
            <Link to='/loyalty' className={Style['header-top-line-link']}>Bonus coins</Link>
            <Link to='/business' className={Style['header-top-line-link']}>For Business</Link>
            <div className={Style['header-top-line-link']}>
                <Icon size='small' name='phone'/>
                8-800-555-35-35
            </div>
        </div>
    )
}

export default Top;