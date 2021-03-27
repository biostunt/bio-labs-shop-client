import { Link, Route, RouteComponentProps, Router, useParams } from 'react-router-dom';

const shoppingItems = new Array(100).fill(1).map((e, i) => ({ id: i, name: `Item-${i}`, url:`/${i}` }));

interface Props extends RouteComponentProps {}

const ShoppingList = (props: Props) => {
    const { location, history } = props;
    return (
        <div className='ShoppingList'>
            <Router history={history}>
                {
                    shoppingItems.map((e,i) => <Link key={i+1} to={location.pathname + e.url}>
                        <div className='ListCard'>{e.name}</div>
                    </Link>)
                }
            </Router>
        </div>
    )
}

export default ShoppingList;