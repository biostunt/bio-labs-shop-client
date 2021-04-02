import Style from '../style.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { TUserRoles } from '../../../../Interfaces/User.interface';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../../../Store';

const ControlPanel = () => {
    const userRole: TUserRoles = useSelector((state: IStoreState) => state.user.userData.role);

    console.log(userRole);

    if (userRole === 'ADMINISTRATOR') {
        return (
            <Link to='/control-panel' className={Style['header-bottom-line-link']}>
                <Icon size='small' name='columns' />
                Control panel
            </Link>
        );
    } else {
        return <div></div>
    }
}

export default ControlPanel;