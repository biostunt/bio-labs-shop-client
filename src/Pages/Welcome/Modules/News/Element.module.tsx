import { ISliderItem } from "../../../../Store/WelcomePage/Interfaces";
import Style from './style.module.scss';
import { Link } from 'react-router-dom';

interface Props extends ISliderItem {}

const Element = (props : Props) => {
    const { id, page_url, photo_url, title, description } = props;
    return (
        <Link key={id + 1} to={page_url} style={{width: '100%', height: '100%'}}>
            <div className={Style.container} style={{background: `url('${photo_url}')`}}>
                <div className={Style.title}>{title}</div>
                <div className={Style.description}>{description}</div>
            </div>
        </Link>
    );
}

export default Element;