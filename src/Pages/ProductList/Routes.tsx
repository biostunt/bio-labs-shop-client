import {Route, Switch, withRouter} from 'react-router-dom';
import ProductList from './ProductList';

const Routes = () => {
    return <Switch>
        <Route path='/products' component={withRouter(ProductList)}/>
    </Switch>
}

export default Routes;