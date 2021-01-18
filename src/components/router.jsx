import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tasks from "../screens/Tasks";
import Monthly from "../screens/Monthly";
import AddMonthly from "../screens/Monthly/AddMonthly";
import EditMonthly from "../screens/Monthly/EditMonthly";
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
import Detail from "../screens/Monthly/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/find-password" component={FindPassword} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-up/success" component={SignUpSuccess} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/monthly/add" component={AddMonthly} />
        <PrivateRoute exact path="/monthly/edit/:id" component={EditMonthly} />
        <PrivateRoute exact path="/monthly/:id" component={Detail} />
        <PrivateRoute exact path="/challenge" component={Challenge} />
        <PrivateRoute exact path="/challenge/enroll" component={Enroll} />
        <PrivateRoute exact path="/challenge/:id" component={Record} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute
          exact
          path="/account/reset-password"
          component={ResetPw}
        />
        <PrivateRoute
          exact
          path="/account/delete-account"
          component={DeleteAccount}
        />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
