import { useSelector } from "react-redux";
import { IStoreState } from "../../../../Store";
import { Slider } from "../../../../Components";
import SliderElement from './Element.module';


const NewsSlider = () => {
    const items = useSelector((state: IStoreState) => state.welcomePage.sliderItems);
    return <Slider items={items.map(e => <SliderElement {...e} />)} delay={5000}/>
}

export default NewsSlider;
