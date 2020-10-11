import React, { useEffect } from "react";
import { connect } from "react-redux";

import { monthlyApi } from "../../api";
import MonthlyPresenter from "./MonthlyPresenter";
import {
  EDIT_MONTHLY,
  FETCH_MONTHLY_FAILED,
  FETCH_MONTHLY_START,
  FETCH_MONTHLY_SUCCESS,
  SELECT_MONTHLY,
} from "../../redux/types";

const Monthly = (monthlyProps) => {
  const {
    state,
    fetch_monthly,
    fetch_success,
    fetch_failed,
    select,
    edit,
  } = monthlyProps;

  const onDelete = () => {};
  const onEdit = (event) => {
    const target = event.target.id;
    edit(target);
  };
  const onClickDay = (event) => {
    const target = event.toString().substring(0, 10);
    select(target);
  };
  async function fetchData() {
    fetch_monthly();
    try {
      const res = await monthlyApi.getMonthly();
      fetch_success(res.data.monthly);
      console.log(res);
    } catch (error) {
      console.log(error.response);
      fetch_failed("문제가 발생하였습니다. 잠시 후 다시 시도해주십시오");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MonthlyPresenter
      {...state}
      onClickDay={onClickDay}
      onDelete={onDelete}
      onEdit={onEdit}
    />
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
    fetch_failed: (error) => {
      dispatch({ type: FETCH_MONTHLY_FAILED, payload: error });
    },
    select: (date) => {
      dispatch({ type: SELECT_MONTHLY, payload: date });
    },
    edit: (id) => {
      dispatch({ type: EDIT_MONTHLY, payload: id });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);
