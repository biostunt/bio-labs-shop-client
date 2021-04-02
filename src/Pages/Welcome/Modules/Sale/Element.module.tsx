import { ISaleItem } from '../../../../Interfaces/Sale.interface';
import Style from './style.module.scss';



interface Props extends ISaleItem { };

const Element = (props: Props) => {
    const { id, name, photo_url, page_url, old_price, new_price } = props;
    return <div className={Style.container}>
      <div className={Style["image-container"]}>
        <img className={Style.image} alt="" src={photo_url} />
      </div>
      <div className={Style["content-container"]}>
        <div className={Style["content-name"]}>
            {name}
        </div>
        <div className={Style["old-price"]}>
          Old price:
          <s>{old_price}</s>
        </div>
        <div className={Style["new-price"]}>
            New price: {new_price}
        </div>
            <div className={Style["time"]}>
                Time remain: {new Date().toISOString().split('T')[1].split('.')[0]}
        </div>
      </div>
    </div>
}

export default Element; 