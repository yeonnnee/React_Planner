/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { FINISHED_TASKS } from "../redux/actions";
import axios from "axios";

const TaskList = ({ text, id, change }) => {
  function changeStatus() {
    const target = { id: id, text: text, status: "FINISHED" };
    console.log(target);
    axios.put("/api/tasks", target);
    change();
  }
  return (
    <div>
      <input type="checkbox" onClick={changeStatus} defaultChecked={false} />
      <li>{text}</li>
      <button>x</button>
    </div>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    change: () => {
      dispatch({
        type: FINISHED_TASKS,
        payload: ownProps,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(TaskList);
