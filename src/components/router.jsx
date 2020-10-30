import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tasks from "../screens/Tasks";
import Monthly from "../screens/Monthly";
import AddMonthly from "../screens/Monthly/AddMonthly";
import EditMonthly from "../screens/Monthly/EditMonthly";
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
import Footer from "./Footer";
import Challenge from "../screens/Challenge";
import Enroll from "../screens/Challenge/Enroll";
import Record from "../screens/Challenge/Record";

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
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/add" component={AddMonthly} />
        <PrivateRoute exact path="/edit" component={EditMonthly} />
        <PrivateRoute exact path="/challenge" component={Challenge} />
        <PrivateRoute exact path="/enroll" component={Enroll} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/reset-password" component={ResetPw} />
        <PrivateRoute exact path="/delete-account" component={DeleteAccount} />
        <PrivateRoute exact path="/:id" component={Record} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
