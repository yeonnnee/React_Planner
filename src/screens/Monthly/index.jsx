import React, { useEffect } from "react";
import { connect } from "react-redux";

import { monthlyApi } from "../../api";
import MonthlyPresenter from "./MonthlyPresenter";
import {
  DELETE_MONTHLY,
  EDIT_MONTHLY,
  FAILED,
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
} from "../../redux/types";

const Monthly = (monthlyProps) => {
  const {
    state,
    fetch_monthly,
    fetch_success,
    failed,
    edit,
    deletePlan,
  } = monthlyProps;

  const onDelete = async (event) => {
    try {
      const date = event.target.id;
      const target = state.plans.find((plan) => plan.date === date);
      await monthlyApi.deletePlan(target);
      deletePlan(target);
    } catch (error) {
      failed(error);
    }
  };
  const onEdit = (event) => {
    const target = event.target.id;
    edit(target);
  };

  async function fetchData() {
    fetch_monthly();
    try {
      const res = await monthlyApi.getMonthly();
      fetch_success(res.data.monthly);
    } catch (error) {
      failed("문제가 발생하였습니다. 잠시 후 다시 시도해주십시오");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <MonthlyPresenter {...state} onDelete={onDelete} onEdit={onEdit} />;
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
    failed: (error) => {
      dispatch({ type: FAILED, payload: error });
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
