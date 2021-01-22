import React from "react";

import AddMonthlyForm from "../AddMonthly/AddMonthlyPresenter";

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
    location,
    onConfirm,
  } = editProps;

  return (
    <AddMonthlyForm
      onChange={onChange}
      onSubmit={onSubmit}
      save={save}
      cancel={cancel}
      deleteListItem={deleteListItem}
      planList={planList}
      content={content}
      selectTime={selectTime}
      selectedDate={selectedDate}
      location={location}
      onConfirm={onConfirm}
    />
  );
};

export default EditMonthlyPresenter;
