// Router.js
import { BrowserRouter, Route, Switch } from 'eact-router-dom';
import mainPage from './pages/Main';
import AboutUs from './pages/About';
import Testimonials from './pages/Testimonials';
import WeddingPage from './pages/Wedding';
import PrivateParties from './pages/Privateparties';
import CorporateEventPage from './pages/Corporate';
import Login from './pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pages/main"component={Main} />
        <Route path="/pages/about" component={About} />
        <Route path="/pages/testimonials" component={Testimonials} />
        <Route path="/pages/wedding" component={Wedding} />
        <Route path="/pages/privateparties" component={Privateparties} />
        <Route path="/pages/corporate" component={Corporate} />
        <Route path="/pages/funeral" component={Funeral} />
        <Route path="/pages/services" component={Services} />
        <Route path="/pages/login"component={Login} />

      </Switch>
    </BrowserRouter>
  );
};

export default Router;