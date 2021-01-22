import React from "react";

import AddMonthlyForm from "../AddMonthly/AddMonthlyPresenter";

const EditMonthlyPresenter = (editProps) => {
  const {
    onChange,
    onSubmit,
    save,
    cancel,
    deleteListItem,
    planList,
    content,
    confirmDelete,
    selectedDate,
    deleteMonthly,
    selectTime,
    location,
    modalStatus,
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
      confirmDelete={confirmDelete}
      deleteMonthly={deleteMonthly}
      modalStatus={modalStatus}
    />
  );
};

export default EditMonthlyPresenter;
