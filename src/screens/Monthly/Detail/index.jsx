import React from "react";
import { connect } from "react-redux";

import MonthlyDetailPresenter from "./DetailPresenter";
import { monthlyApi } from "../../../api";
import ServerError from "../../../components/msg/ServerError";
import GatewayError from "../../../components/msg/GatewayError";
import {
  DELETE_MONTHLY,
  MONTHLY_ERROR,
} from "../../../redux/actions/monthlyActions";

const MonthlyDetail = (monthlyProps) => {
  const { state, deletePlan, setError, history } = monthlyProps;

  const onDelete = async (event) => {
    try {
      const date = event.target.id;
      const target = state.plans.find((plan) => plan.date === date);
      await monthlyApi.deletePlan(target);
      deletePlan(target);
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
  };

  const onConfirm = (event) => {
    alert("정말로 삭제하시겠습니까?");
    if (alert) {
      onDelete(event);
    }
  };

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <MonthlyDetailPresenter onConfirm={onConfirm} state={state} />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    deletePlan: (plan) => {
      dispatch({ type: DELETE_MONTHLY, payload: plan });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MonthlyDetail);
