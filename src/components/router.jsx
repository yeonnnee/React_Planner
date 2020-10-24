import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tasks from "../screens/Tasks";
import Monthly from "../screens/Monthly";
import AddMonthly from "../screens/AddMonthly";
import EditMonthly from "../screens/EditMonthly";
import Home from "../screens/Home";
import Account from "../screens/Account";
import ResetPw from "../screens/Account/ResetPw";
import DeleteAccount from "../screens/Account/DeleteAccount";
import LogIn from "../screens/Auth";
import FindPassword from "../screens/FindPassword";
import SignUp from "../screens/SignUp";
import SignUpSuccess from "../screens/SignUp/SignUpSuccess";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./msg/NotFound";
import GatewayError from "./msg/GatewayError";
import ServerError from "./msg/ServerError";
import ErrorPage from "./msg/ErrorPage";
import Footer from "./Footer";
import Challenge from "../screens/Challenge";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/find-password" component={FindPassword} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-up/success" component={SignUpSuccess} />
        <Route path="/504" component={GatewayError} />
        <Route path="/500" component={ServerError} />
        <Route path="/error" component={ErrorPage} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/add" component={AddMonthly} />
        <PrivateRoute exact path="/edit" component={EditMonthly} />
        <PrivateRoute exact path="/challenge" component={Challenge} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/reset-password" component={ResetPw} />
        <PrivateRoute exact path="/delete-account" component={DeleteAccount} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
