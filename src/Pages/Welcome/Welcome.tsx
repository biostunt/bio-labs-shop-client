import Style from './style.module.scss';
import {NewsSlider, SaleSlider, History} from './Modules';


const Welcome = () => {
    return (
        <div className={Style.container}>
            <div className={Style.news}>
                <NewsSlider />
            </div>
            <div className={Style.sale}>
                <SaleSlider />
            </div>
            <div className={Style.history}>
                <History/>
            </div>
        </div>
    )
}

export default Welcome;