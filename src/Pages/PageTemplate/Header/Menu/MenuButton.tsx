import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import {IPage} from '../../../../Store/Settings/Interfaces'
import Style from './style.module.scss';

interface Props extends IPage {
    key: number;
};

const MenuButton = (props: Props) => {
    const { url, name, icon_name, key } = props;
    console.log(icon_name)
    return (
        <Link key={key} to={url}>
            <Button style={{boxShadow: 'none'}} size='massive' basic>
                {
                    icon_name ? <Icon aria-hidden='false' color='grey' name={icon_name} /> : ''
                }
                {name}
            </Button>
        </Link>
    )
}

export default MenuButton;