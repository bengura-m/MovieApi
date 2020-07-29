import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// pages for this product
import LandingPage from "./components/pages/LandingPage"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage"
import NavBar from "./components/Navbar/NavBar"
// import MovieDetail from "./views/MovieDetail/MovieDetail"
import FavoritePage from "./components/pages/FavoritePage"
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;