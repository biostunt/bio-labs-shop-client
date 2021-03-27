import 'semantic-ui-css/semantic.min.css'
import { AboutRoutes } from './Pages/About';
import { ShoppingRoutes } from './Pages/ShoppingList'
import { WelcomeRoutes } from './Pages/Welcome'
import { ErrorRoutes } from './Pages/Error';
import PageTemplate from './Pages/PageTemplate';

const l = <>
    <ShoppingRoutes />
    <AboutRoutes />
    <ErrorRoutes/>
    <WelcomeRoutes />
</>

const App = () => {
    return (
        <PageTemplate>
            {l}
        </PageTemplate>
    );
}

export default App;
