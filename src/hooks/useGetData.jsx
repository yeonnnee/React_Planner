import { useEffect, useReducer } from "react";
import axios from "axios";

import fetchReducer, { initialState } from "../redux/reducers/fetchReducer";
import { FETCH_FAILED, FETCH_SUCCESS } from "../redux/actions";

const useGetData = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  async function fetchData() {
    try {
      const fetchData = await axios.get("/api/tasks");
      const data = JSON.parse(fetchData.data);
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FAILED });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useGetData;
