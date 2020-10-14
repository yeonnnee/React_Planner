import React from "react";

import EditMonthlyForm from "../AddMonthly/AddMonthlyPresenter";

const EditMonthlyPresenter = (editProps) => {
  const {
    onChange,
    onSubmit,
    deleteItem,
    planList,
    content,
    save,
    date,
  } = editProps;

  return (
    <EditMonthlyForm
      onChange={onChange}
      onSubmit={onSubmit}
      deleteItem={deleteItem}
      planList={planList}
      content={content}
      save={save}
      date={date}
    />
  );
};

export default EditMonthlyPresenter;
