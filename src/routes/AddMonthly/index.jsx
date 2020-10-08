import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import AddMonthlyPresenter from "./AddMonthlyPresenter";

const MonthlyAdd = (monthlyAddProps) => {
  const { state, select, history } = monthlyAddProps;

  const [planList, setPlanList] = useState([]);
  const [content, setContent] = useState({
    id: "",
    text: "",
    date: "",
    error: "",
  });

  function save() {
    // history.push("/monthly");
    console.log(planList);
  }

  function deleteItem(event) {
    const target = event.target.parentNode.id;
    const filteredPlanList = planList.filter((plan) => plan.id !== target);
    setPlanList([...filteredPlanList]);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (content.text !== "") {
      setPlanList([...planList, content]);
      setContent({
        text: "",
        date: "",
        error: "",
      });
    }
  }

  function onChange(event) {
    const value = event.target.value;
    setContent({
      id: uuidv4().toString(),
      text: value,
      date: state.date,
      error: "",
    });
  }

  return (
    <AddMonthlyPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      save={save}
      select={select}
      planList={planList}
      content={content}
      {...state}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyAdd);
