import Style from './style.module.scss';
import Logo from './Logo';
import Menu from './Menu';
import User from './User';


const Header = () => {
    return <div className={Style.header}>
        <Logo />
        <Menu />
        <User />
    </div>
}



export default Header;