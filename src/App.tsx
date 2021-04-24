import 'semantic-ui-css/semantic.min.css'
import { AboutRoutes } from './Pages/About';
import { WelcomeRoutes } from './Pages/Welcome'
import { ErrorRoutes } from './Pages/Error';
import {ProductListRoutes} from './Pages/ProductList'
import PageTemplate from './Pages/PageTemplate';

const l = <>
    <ProductListRoutes />
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
