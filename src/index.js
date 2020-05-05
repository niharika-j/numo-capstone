import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './scrollToTop';
/*All pages*/
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Background from './components/Background/Background';
import Consumers from './components/Consumers/Consumers';
import Merchants from './components/Merchants/Merchants';
import Prototypes from './components/Prototypes/Prototypes';
import Team from './components/Team/Team';

ReactDOM.render(
  <Router basename="/numo-capstone">
    <Navbar />
    <Switch>
    <ScrollToTop>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/background">
        <Background />
      </Route>
      <Route path="/merchants">
        <Merchants />
      </Route>
      <Route path="/consumers">
        <Consumers />
      </Route>
      <Route path="/prototypes">
        <Prototypes />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      </ScrollToTop>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
