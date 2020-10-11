import React from "react";

import EditMonthlyForm from "../AddMonthly/AddMonthlyPresenter";

const EditMonthlyPresenter = (editProps) => {
  const { onChange, onSubmit, deleteItem, planList, content } = editProps;
  console.log("planLsit", planList);
  return (
    <EditMonthlyForm
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      planList={planList}
      content={content}
    />
  );
};

export default EditMonthlyPresenter;
