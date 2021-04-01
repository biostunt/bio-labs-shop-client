import Style from './style.module.scss';
import { useSelector } from "react-redux"
import { IStoreState } from "../../../../Store"


const History = () => {
    const historyItems = useSelector((state: IStoreState) => state.user.history);

    return (
        <div className={Style.container}>
            <div className={Style.header}>
                Recently watched:
            </div>
            <div className={Style.body}></div>
        </div>
    )
}

export default History