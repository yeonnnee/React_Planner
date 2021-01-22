import React, { useState } from "react";
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
} from "../../../redux/actions/monthlyActions";

const EditMonthly = (editProps) => {
  const { state, update, history, saveMonthly, setError } = editProps;

  const [planList, setPlanList] = useState({
    id: state.selected.id,
    date: state.selected.date,
    contents: state.selected.contents,
  });

  const [content, setContent] = useState({
    id: "",
    text: "",
    time: { hour: "00", min: "00" },
    error: "",
  });

  function onChange(event) {
    const value = event.target.value;

    if (value.length > 30) {
      setContent({
        id: uuidv4().toString(),
        text: value,
        time: content.time,
        error: "30자 이내로 작성해 주십시오",
      });
    } else {
      setContent({
        id: uuidv4().toString(),
        text: value,
        time: content.time,
        error: "",
      });
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    if (content.text && !content.error) {
      setPlanList({
        ...planList,
        contents: [...planList.contents, content],
      });
      setContent({
        ...content,
        id: "",
        text: "",
        error: "",
      });
    } else {
      setContent({
        id: content.id,
        text: content.text,
        time: content.time,
        error: "내용을 입력해 주세요",
      });
    }
  }

  function selectTime(event) {
    const target = event.target;

    if (target.name === "hour") {
      setContent({
        id: content.id,
        text: content.text,
        time: { hour: target.value, min: content.time.min },
        error: "",
      });
    } else if (target.name === "min") {
      setContent({
        id: content.id,
        text: content.text,
        time: { hour: content.time.hour, min: target.value },
        error: "",
      });
    }
  }

  function deleteListItem(event) {
    const target = event.target.parentNode;

    const filteredPlanList = planList.contents.filter(
      (plan) => plan.id !== target.id
    );
    setPlanList({ ...planList, contents: [...filteredPlanList] });
  }

  async function save() {
    try {
      if (planList.contents.length > 0) {
        saveMonthly();
        await monthlyApi.updatePlan(planList);
        update(planList);

        history.push(`/monthly`);
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

  function cancel() {
    history.push("/monthly");
  }

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
          save={save}
          cancel={cancel}
          deleteListItem={deleteListItem}
          planList={planList}
          content={content}
          selectTime={selectTime}
          selectedDate={state.selected.date}
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
