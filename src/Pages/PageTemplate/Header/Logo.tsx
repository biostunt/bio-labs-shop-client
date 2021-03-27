import Style from './style.module.scss';
import logotype from './concept.png';

const Logo = () => {
    return (
        <img className={Style['logo-container']} src={logotype} alt=''/>
    );
}

export default Logo;