import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { monthlyApi } from "../../api";
import { UPDATE_MONTHLY } from "../../redux/types";
import EditMonthlyPresenter from "./EditMonthlyPresenter";

const EditMonthly = (editProps) => {
  const { state, update, history } = editProps;

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

  function cancel() {
    history.push("/monthly");
  }

  async function save() {
    try {
      await monthlyApi.updatePlan(planList);
      update(planList);
      history.push("/monthly");
    } catch (error) {
      const status = error.response.status;
      if (status === 504) {
        history.push("/504");
      } else if (status === 500) {
        history.push("/500");
      } else if (status === 400) {
        history.push("/error");
      } else {
        return;
      }
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
    if (content.text && !content.error) {
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
    if (value.length > 30) {
      setContent({
        id: uuidv4().toString(),
        text: value,
        error: "30자 이내로 작성해 주십시오",
      });
    } else {
      setContent({
        id: uuidv4().toString(),
        text: value,
        error: "",
      });
    }
  }

  return (
    <EditMonthlyPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      planList={planList}
      content={content}
      save={save}
      cancel={cancel}
      date={planList.date}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    update: (updatedPlan) => {
      dispatch({ type: UPDATE_MONTHLY, payload: updatedPlan });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMonthly);
