import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { monthlyApi } from "../../api";
import MonthlyPresenter from "./MonthlyPresenter";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";
import {
  DELETE_MONTHLY,
  EDIT_MONTHLY,
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  MONTHLY_ERROR,
} from "../../redux/types";

const Monthly = (monthlyProps) => {
  const {
    state,
    fetch_monthly,
    fetch_success,
    edit,
    deletePlan,
    history,
    setError,
  } = monthlyProps;

  const onDelete = async (event) => {
    try {
      const date = event.target.id;
      const target = state.plans.find((plan) => plan.date === date);
      await monthlyApi.deletePlan(target);
      deletePlan(target);
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
  const onEdit = (event) => {
    const target = event.target.id;
    edit(target);
  };

  const fetchData = useCallback(async () => {
    fetch_monthly();
    try {
      const res = await monthlyApi.getMonthly();
      fetch_success(res.data.monthly);
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
  }, [fetch_monthly, fetch_success, history]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <MonthlyPresenter {...state} onEdit={onEdit} onConfirm={onConfirm} />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch_monthly: () => {
      dispatch({ type: FETCH_MONTHLY_START });
    },
    fetch_success: (data) => {
      dispatch({ type: FETCH_MONTHLY_SUCCESS, payload: data });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
    edit: (id) => {
      dispatch({ type: EDIT_MONTHLY, payload: id });
    },
    deletePlan: (plan) => {
      dispatch({ type: DELETE_MONTHLY, payload: plan });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);
