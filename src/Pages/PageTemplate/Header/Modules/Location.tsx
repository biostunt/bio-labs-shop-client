import Style from '../style.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Location = () => {
    return (
        <Link to='/location' className={Style['header-top-line-link']}>
            <Icon size='small' name='location arrow'/>
            Moscow
        </Link>
    );
}

export default Location;