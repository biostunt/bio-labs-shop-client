import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../../../Store';
import Actions from '../../../../Store/Actions';
import Style from './style.module.scss';


/// 
const priceFilter: RegExp =  /([0-9]*[.])?[0-9]+/gm
const PricePicker = () => {
    const price = useSelector((state: IStoreState) => state.productList.searchQuery.price);
    const dispatch = useDispatch();

    const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        dispatch(Actions.productListActions.changeSearchQueryPrice({ ...price, min: Number.parseFloat(value) }));
    }

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        dispatch(Actions.productListActions.changeSearchQueryPrice({ ...price, max: Number.parseFloat(value) }));
    }

    return <div className={Style['price-container']}>
        <div className={Style['price-header']}>
            <strong>Price:</strong> 
        </div>
        <div className={Style['price-content']}>
            <input className={Style['price-input']} type="number" placeholder='Min' value={price.min} onChange={onMinChange.bind(this)}/>
            -
            <input className={Style['price-input']} type="number" placeholder='Max' value={price.max} onChange={onMaxChange.bind(this)}/>
        </div>
    </div>
}

export default PricePicker;