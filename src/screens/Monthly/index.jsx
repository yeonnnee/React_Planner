import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { monthlyApi } from "../../api";
import MonthlyPresenter from "./MonthlyPresenter";
import {
  DELETE_MONTHLY,
  EDIT_MONTHLY,
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
} from "../../redux/types";

const Monthly = (monthlyProps) => {
  const {
    state,
    fetch_monthly,
    fetch_success,
    edit,
    deletePlan,
    history,
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
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      } else {
        return;
      }
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
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      } else {
        return;
      }
    }
  }, [fetch_monthly, fetch_success, history]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

    edit: (id) => {
      dispatch({ type: EDIT_MONTHLY, payload: id });
    },
    deletePlan: (plan) => {
      dispatch({ type: DELETE_MONTHLY, payload: plan });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);
