import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tasks from "../../screens/Tasks";
import Monthly from "../../screens/Monthly";
import AddMonthly from "../../screens/Monthly/AddMonthly";
import EditMonthly from "../../screens/Monthly/EditMonthly";
import Account from "../../screens/Account";
import ResetPw from "../../screens/Account/ResetPw";
import DeleteAccount from "../../screens/Account/DeleteAccount";
import LogIn from "../../screens/Auth";
import FindPassword from "../../screens/FindPassword";
import SignUp from "../../screens/SignUp";
import SignUpSuccess from "../../screens/SignUp/SignUpSuccess";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../msg/NotFound";
import Footer from "../Footer";
import Challenges from "../../screens/Challenge";
import Enroll from "../../screens/Challenge/Enroll";
import Record from "../../screens/Challenge/Record";
import Preview from "../../screens/Preview";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/logIn" exact component={LogIn} />
        <Route path="/find-password" component={FindPassword} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-up/success" component={SignUpSuccess} />
        <PrivateRoute exact path="/" component={Preview} />
        <PrivateRoute path="/tasks" component={Tasks} />
        <PrivateRoute exact path="/monthly" component={Monthly} />
        <PrivateRoute exact path="/monthly/add" component={AddMonthly} />
        <PrivateRoute exact path="/monthly/edit/:id" component={EditMonthly} />
        <PrivateRoute exact path="/challenges" component={Challenges} />
        <PrivateRoute exact path="/challenges/enroll" component={Enroll} />
        <PrivateRoute exact path="/challenges/:id" component={Record} />
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
