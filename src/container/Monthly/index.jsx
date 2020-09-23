import React, { useState, useEffect } from "react";
import axios from "axios";
import MonthlyPresenter from "../../presenter/MonthlyPresenter";

const Monthly = () => {
  const [state, setState] = useState({
    date: "",
    content: "",
    id: "",
    createdAt: "",
  });

  async function fetchData() {
    try {
      const res = await axios.get("/api/monthly");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <MonthlyPresenter />;
};

export default Monthly;
