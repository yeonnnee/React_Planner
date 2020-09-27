import React, { useState, useEffect } from "react";
import axios from "axios";
import MonthlyPresenter from "./MonthlyPresenter";
import { connect } from "react-redux";
import monthlyReducer from "../../redux/reducers/monthlyReducer";

const Monthly = (monthlyProps) => {
  const { state } = monthlyProps;
  const [selected, setSelected] = useState();
  async function fetchData() {}

  useEffect(() => {
    fetchData();
  }, []);
  return <MonthlyPresenter {...state} {...selected} />;
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);
