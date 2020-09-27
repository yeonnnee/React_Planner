import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import AddMonthlyPresenter from "./AddMonthlyPresenter";
import { CREATE_MONTHLY } from "../../redux/types";

const MonthlyAdd = (monthlyAddProps) => {
  const { add, history } = monthlyAddProps;

  const [plans, setPlans] = useState({ monthly: [] });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });

  function deleteItem() {
    console.log("plans", plans.monthly);
  }

  function save() {
    const date = new Date();
    const today = date.toString().substring(0, 10);
    add({
      id: uuidv4().toString(),
      date: today,
      content: [...plans.monthly],
    });
    history.push("/");
  }

  function onSubmit(event) {
    event.preventDefault();
    setPlans({ monthly: [...plans.monthly, content] });
    setContent({
      text: "",
      error: "",
    });
  }

  function onChange(event) {
    const value = event.target.value;
    setContent({ id: uuidv4().toString(), text: value, error: "" });
  }

  return (
    <AddMonthlyPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      save={save}
      deleteItem={deleteItem}
      plans={plans}
      content={content}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return {
    add: (monthly) => {
      dispatch({ type: CREATE_MONTHLY, payload: monthly });
    },
  };
}

export default connect(null, mapDispatchToProps)(MonthlyAdd);
