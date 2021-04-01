import Style from '../style.module.scss';
import { Button, Icon } from 'semantic-ui-react';

const User = () => {
    return (
        <div className={Style['header-bottom-line-link']}>
            <Icon size='small' name='user circle outline' />
            Enter
        </div>
    );
}

export default User;