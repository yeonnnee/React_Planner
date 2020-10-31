import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { monthlyApi } from "../../../api";
import GatewayError from "../../../components/msg/GatewayError";
import ServerError from "../../../components/msg/ServerError";
import EditMonthlyPresenter from "./EditMonthlyPresenter";
import {
  SAVE_MONTHLY,
  UPDATE_MONTHLY,
  MONTHLY_ERROR,
} from "../../../redux/types";

const EditMonthly = (editProps) => {
  const { state, update, history, saveMonthly, setError, location } = editProps;

  const [planList, setPlanList] = useState({
    id: state.detail.id,
    date: state.detail.date,
    contents: state.detail.contents,
  });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });

  function cancel() {
    const planId = location.pathname.split("/")[3];
    history.push(`/monthly/${planId}`);
  }

  async function save() {
    try {
      if (planList.contents.length > 0) {
        saveMonthly();
        await monthlyApi.updatePlan(planList);
        update(planList);
        const planId = location.pathname.split("/")[3];
        history.push(`/monthly/${planId}`);
      } else {
        setContent({ ...content, error: "내용을 입력해주십시오" });
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
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
  useEffect(() => {
    const newDate = new Date(planList.date);
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const planDate = newDate.getDate();
    if (month < 10) {
      return "0" + month;
    }
    if (planDate < 10) {
      return "0" + planDate;
    }
    setPlanList({ ...planList, date: `${month}-${planDate}-${year}` });
  }, [planList]);

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <EditMonthlyPresenter
          onChange={onChange}
          onSubmit={onSubmit}
          deleteItem={deleteItem}
          planList={planList}
          content={content}
          save={save}
          cancel={cancel}
          state={state}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    saveMonthly: () => {
      dispatch({ type: SAVE_MONTHLY });
    },
    update: (updatedPlan) => {
      dispatch({ type: UPDATE_MONTHLY, payload: updatedPlan });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMonthly);
