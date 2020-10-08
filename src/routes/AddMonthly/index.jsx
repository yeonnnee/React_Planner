import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import AddMonthlyPresenter from "./AddMonthlyPresenter";
import { monthlyApi } from "../../api";
import { CREATE_MONTHLY, CREATE_MONTHLY_FAILED } from "../../redux/types";

const MonthlyAdd = (monthlyAddProps) => {
  const { state, select, history, create, failed } = monthlyAddProps;

  const [planList, setPlanList] = useState({
    id: "",
    date: state.date,
    contents: [],
  });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });

  async function save() {
    try {
      const res = await monthlyApi.postPlan(planList);
      console.log(res);
      create(planList);
      history.push("/monthly");
    } catch (error) {
      console.log(error);
      failed();
    }
  }

  function deleteItem(event) {
    const target = event.target.parentNode.id;
    const filteredPlanList = planList.contents.filter(
      (plan) => plan.id !== target
    );
    setPlanList({ ...planList, contents: [...filteredPlanList] });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (content.text !== "") {
      setPlanList({
        ...planList,
        id: uuidv4().toString(),
        contents: [...planList.contents, content],
      });
      setContent({
        text: "",
        error: "",
      });
    }
  }

  function onChange(event) {
    const value = event.target.value;
    setContent({
      id: uuidv4().toString(),
      text: value,
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
  return {
    create: (plan) => {
      dispatch({ type: CREATE_MONTHLY, payload: plan });
    },
    failed: (error) => {
      dispatch({ type: CREATE_MONTHLY_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyAdd);
