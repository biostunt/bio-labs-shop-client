import Style from '../style.module.scss';
import { Button, Icon } from 'semantic-ui-react';

const Catalogue = () => {
    return (
        <div className={Style['header-bottom-line-link']}>
            <Button className={Style['header-bottom-line-button']} size='big' color='green'>
                <Icon size='small' name='list'/>
                Catalogue
            </Button>
        </div>
    )
}

export default Catalogue;