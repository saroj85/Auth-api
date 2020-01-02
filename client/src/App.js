import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Component/Auth/login';
import Home from './Pages/index';
import Header from './Component/Header'
import Admin from './Pages/admin'
import LoginPage from './Pages/login';
import PostPage from './Pages/post';
import {Provider} from 'react-redux'
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// userDataRequest

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <div style={{height: "20px", width: '100%'}} />
        <Switch>
          <Route path="/login"> <LoginPage /></Route>
          <Route exact={true} path="/"><Home/></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/post"><PostPage /></Route>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
