import { useSelector } from "react-redux";
import { IStoreState } from "../../../../Store";
import { Slider } from "../../../../Components";
import SliderElement from './Element.module';



const Sale = () => {
    const items = useSelector((state: IStoreState) => state.welcomePage.saleItems);
    return<Slider items={items.map(e => <SliderElement {...e} />)} width='25vh' height='40vh' delay={5000}/>
}

export default Sale;