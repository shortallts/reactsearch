import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import reportWebVitals from './reportWebVitals';
import Title from './component/Title';
import MyContainer from './component/container'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';


ReactDOM.render(
  <div  style={{ backgroundImage: "url(/fractal.jpeg)"}}>
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <Title />
          <MyContainer />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>

  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
