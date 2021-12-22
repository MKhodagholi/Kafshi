import React, { useContext } from "react";

import Header from "./components/Header/Header";
import Shoes from "./pages/Shoes/Shoes";

import "./asset/font-awesome/css/font-awesome.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";

import { ThemeContext } from "./context/ThemeProvider";

import classes from "./App.module.css";
import Register from "./pages/Register/Register";

const App = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div className={`app ${theme === "DARK" ? classes.dark : classes.light}`}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shoes" component={Shoes} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
