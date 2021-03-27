import { Route, Switch } from "react-router"
import About from "./About";


const Routes = () => {
    return <Switch>
        <Route path='/about' component={About}/>
    </Switch>
}

export default Routes;