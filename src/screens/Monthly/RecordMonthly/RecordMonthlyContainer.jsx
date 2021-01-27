import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Loader from "../../../components/Loader";
import AddMonthlyPresenter from "./RecordMonthlyPresenter";
import GatewayError from "../../../components/msg/GatewayError";
import ServerError from "../../../components/msg/ServerError";
import { monthlyApi } from "../../../api";
import {
  CREATE_MONTHLY,
  SAVE_MONTHLY,
  MONTHLY_ERROR,
  DELETE_MONTHLY,
  UPDATE_MONTHLY,
} from "../../../redux/actions/monthlyActions";

const MonthlyAdd = (monthlyAddProps) => {
  const {
    state,
    history,
    location,
    create,
    update,
    saveMonthly,
    setError,
    deletePlan,
  } = monthlyAddProps;

  const [modalStatus, setModalStatus] = useState("hidden");
  const [editPlanList, setEditPlanList] = useState({
    id: state.selected.id,
    date: state.selected.date,
    contents: state.selected.contents,
  });
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

  // input 에 입력했을 때
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

  // 시간 선택했을 때 실행
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

  // input, time 작성후 제출할때
  function onSubmit(event) {
    event.preventDefault();

    if (location.pathname.includes("add")) {
      // add page
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
    } else if (location.pathname.includes("edit")) {
      // edit 페이지
      if (content.text && !content.error) {
        setEditPlanList({
          ...editPlanList,
          contents: [...editPlanList.contents, content],
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
  }

  // 삭제버튼 클릭시 modal 창 띄우기
  function confirmDelete() {
    if (modalStatus === "hidden") {
      setModalStatus("show");
    }
  }

  // monthly 입력한 리스트들 중 하나 삭제
  function deleteListItem(event) {
    const target = event.target.parentNode;

    if (location.pathname.includes("edit")) {
      // edit 페이지
      const filteredPlanList = editPlanList.contents.filter(
        (plan) => plan.id !== target.id
      );
      setEditPlanList({ ...editPlanList, contents: [...filteredPlanList] });
    } else if (location.pathname.includes("add")) {
      // add 페이지
      const filteredPlanList = planList.contents.filter(
        (plan) => plan.id !== target.id
      );
      setPlanList({ ...planList, contents: [...filteredPlanList] });
    }
  }

  // monthly 전체 삭제
  async function deleteMonthly() {
    try {
      const target = location.pathname.split("/")[3];
      const deletedPlan = state.plans.find((plan) => plan.id === target);
      await monthlyApi.deletePlan(deletedPlan);
      deletePlan(deletedPlan);
      history.push("/monthly");
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      } else {
        return;
      }
    }
  }

  // 취소버튼
  function cancel() {
    history.push("/monthly");
  }

  // 저장버튼
  async function save() {
    try {
      saveMonthly();
      if (location.pathname.includes("add")) {
        // 최초저장
        if (planList.contents.length > 0) {
          await monthlyApi.postPlan(planList);
          create(planList);
          history.push("/monthly");
        } else {
          setContent({ ...content, error: "내용을 입력해주십시오" });
        }
      } else if (location.pathname.includes("edit")) {
        if (editPlanList.contents.length > 0) {
          // 변경사항 저장
          await monthlyApi.updatePlan(editPlanList);
          update(planList);
          history.push("/monthly");
        } else {
          setContent({ ...content, error: "내용을 입력해주십시오" });
        }
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
          save={save}
          cancel={cancel}
          deleteListItem={deleteListItem}
          selectTime={selectTime}
          planList={planList}
          editPlanList={editPlanList}
          content={content}
          location={location}
          selectedDate={state.selectedDate}
          confirmDelete={confirmDelete}
          modalStatus={modalStatus}
          deleteMonthly={deleteMonthly}
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
    update: (plan) => {
      dispatch({ type: UPDATE_MONTHLY, payload: plan });
    },
    deletePlan: (plan) => {
      dispatch({ type: DELETE_MONTHLY, payload: plan });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyAdd);
