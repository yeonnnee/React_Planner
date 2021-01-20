import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { monthlyApi } from "../../api";
import MonthlyPresenter from "./MonthlyPresenter";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";
import Loader from "../../components/Loader";
import {
  FETCH_MONTHLY,
  FETCH_MONTHLY_SUCCESS,
  MONTHLY_ERROR,
} from "../../redux/actions/monthlyActions";

const Monthly = (monthlyProps) => {
  const { state, fetch_monthly, fetch_success, setError } = monthlyProps;

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
  }, [fetch_monthly, fetch_success, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <MonthlyPresenter {...state} />
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
      dispatch({ type: FETCH_MONTHLY });
    },
    fetch_success: (data) => {
      dispatch({ type: FETCH_MONTHLY_SUCCESS, payload: data });
    },
    setError: (error) => {
      dispatch({ type: MONTHLY_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);
