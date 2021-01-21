import React from "react";

import AddMonthlyInputPresenter from "./AddMonthlyInputPresenter";

const AddMonthlyInputContainer = (addMonthlyInputProps) => {
  const { planDate } = addMonthlyInputProps;
  return <AddMonthlyInputPresenter planDate={planDate} />;
};

export default AddMonthlyInputContainer;
