import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NewVideo from './videos-feature/pages/NewVideo';
import Videos from './videos-feature/pages/Videos';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserVideo from './videos-feature/pages/UserVideo';
import UpdateVideo from './videos-feature/pages/UpdateVideo';
import Auth from './user-feature/pages/Auth';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Videos />
          </Route>
          <Route path="/:userId/videos" exact>
            <UserVideo />
          </Route>
          <Route path="/video/new" exact>
            <NewVideo />
          </Route>
          <Route path="/video/:videoId" exact>
            <UpdateVideo />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
