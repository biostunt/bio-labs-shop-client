import { Switch, Route, withRouter } from "react-router-dom";
import Error from './Error';

const Routes = () => {
    return (
        <Switch>
            <Route path='/error' component={withRouter(Error)}/>
        </Switch>
    )
}

export default Routes;