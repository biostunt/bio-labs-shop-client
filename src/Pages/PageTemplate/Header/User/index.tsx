import Style from './style.module.scss';
import {Button, Icon} from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { IStoreState } from '../../../../Store';

const User = () => {
    const cart = useSelector((state: IStoreState) => state.user.cart);
    return (
        <div className={Style['user-container']}>
            <div className={Style['button-group']}>
                <div className={Style['cabinet-container']}>
                    <Icon color='grey' size='huge' name='user circle outline' className={Style['user-logo']}/>
                    <Button basic color='instagram' className={Style['enter-button']}>
                        Log In
                    </Button>
                </div>
                <div className={Style['cart-container']}>
                    <Button basic color='instagram'>
                        <Icon name='shopping cart' />
                        Cart ({cart.length})
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default User;