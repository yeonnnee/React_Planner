import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import EditMonthlyPresenter from "./EditMonthlyPresenter";

const EditMonthly = (editProps) => {
  const { state } = editProps;

  const [planList, setPlanList] = useState({
    id: state.isEdit.id,
    date: state.isEdit.date,
    contents: state.isEdit.contents,
  });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });

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
    <EditMonthlyPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      planList={planList}
      content={content}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}
// function mapDispatchToProps(dispatch) { return }

export default connect(mapStateToProps)(EditMonthly);
