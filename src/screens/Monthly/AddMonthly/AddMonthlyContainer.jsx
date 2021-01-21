import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Loader from "../../../components/Loader";
import AddMonthlyPresenter from "./AddMonthlyPresenter";
import GatewayError from "../../../components/msg/GatewayError";
import ServerError from "../../../components/msg/ServerError";
import { monthlyApi } from "../../../api";
import {
  CREATE_MONTHLY,
  SAVE_MONTHLY,
  MONTHLY_ERROR,
} from "../../../redux/actions/monthlyActions";

const MonthlyAdd = (monthlyAddProps) => {
  const { state, history, create, saveMonthly, setError } = monthlyAddProps;

  const [planList, setPlanList] = useState({
    id: uuidv4().toString(),
    date: state.selectedDate,
    contents: [],
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

  function onSubmit(event) {
    event.preventDefault();

    if (content.text && !content.error) {
      setPlanList({
        ...planList,
        contents: [...planList.contents, content],
      });
      setContent({
        id: "",
        text: "",
        time: { hour: "00", min: "00" },
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

  function deleteListItem(event) {
    const target = event.target.parentNode;

    const filteredPlanList = planList.contents.filter(
      (plan) => plan.id !== target.id
    );
    setPlanList({ ...planList, contents: [...filteredPlanList] });
  }

  function cancel() {
    history.push("/monthly");
  }

  async function save() {
    try {
      if (planList.contents.length > 0) {
        saveMonthly();
        await monthlyApi.postPlan(planList);
        create(planList);
        history.push("/monthly");
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

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <AddMonthlyPresenter
          onChange={onChange}
          onSubmit={onSubmit}
          deleteListItem={deleteListItem}
          selectTime={selectTime}
          save={save}
          cancel={cancel}
          planList={planList}
          content={content}
          {...state}
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
    create: (plan) => {
      dispatch({ type: CREATE_MONTHLY, payload: plan });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyAdd);
