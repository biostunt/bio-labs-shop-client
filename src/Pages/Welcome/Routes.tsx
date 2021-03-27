import {Route, Switch} from 'react-router-dom'

import Welcome from './Welcome';

const Routes = () => {
    return <Switch>
        <Route exact path='/' component={Welcome}/>
    </Switch>
}

export default Routes;