import Style from '../style.module.scss';
import { Icon } from 'semantic-ui-react';

const Cart = () => {
    return (
        <div className={Style['header-bottom-line-link']}>
            <Icon size='small' name='shopping cart'/>
            Cart
        </div>
    )
}

export default Cart;