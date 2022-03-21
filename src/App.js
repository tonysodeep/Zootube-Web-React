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
  const [token, setToken] = useState(false);

  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Videos />
        </Route>
        <Route path="/videos/:userId" exact>
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
        isLoggedIn: !!token,
        token: token,
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
