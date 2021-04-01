import Style from './style.module.scss';
import Top from './Top';
import Bottom from './Bottom';

const Header = () => {
    return <div className={Style['header']}>
            <Top />
            <Bottom/>
        </div>
}

export default Header;