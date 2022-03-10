import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useCallback, useState } from 'react';

import NewVideo from './videos-feature/pages/NewVideo';
import Videos from './videos-feature/pages/Videos';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserVideo from './videos-feature/pages/UserVideo';
import UpdateVideo from './videos-feature/pages/UpdateVideo';
import Auth from './user-feature/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
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
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Videos />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
