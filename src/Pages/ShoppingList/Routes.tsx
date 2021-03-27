import {Route, Switch, withRouter} from 'react-router-dom';
import ShoppingList from './ShoppingList';
import Card from './Card'
import CardModify from './CardModify';


const Routes = () => {
    return <Switch>
        <Route path='/shopping/:id/change' component={withRouter(CardModify)}/>
        <Route path='/shopping/:id' component={withRouter(Card)}/>
        <Route path='/shopping' component={withRouter(ShoppingList)}/>
    </Switch>
}

export default Routes;