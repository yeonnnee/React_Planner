import React from "react";

import EditMonthlyForm from "../AddMonthly/AddMonthlyPresenter";

const EditMonthlyPresenter = (editProps) => {
  const {
    onChange,
    onSubmit,
    deleteListItem,
    planList,
    content,
    save,
    cancel,
    selectedDate,
    selectTime,
  } = editProps;

  return (
    <EditMonthlyForm
      onChange={onChange}
      onSubmit={onSubmit}
      save={save}
      cancel={cancel}
      deleteListItem={deleteListItem}
      planList={planList}
      content={content}
      selectTime={selectTime}
      selectedDate={selectedDate}
    />
  );
};

export default EditMonthlyPresenter;
