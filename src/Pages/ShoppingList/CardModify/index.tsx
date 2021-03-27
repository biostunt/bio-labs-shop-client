import { useParams } from "react-router-dom";



const CardModify = () => {
    const { id } = useParams<{ id: string }>();
    return <div>Card modification with id: { id }</div>
}

export default CardModify;