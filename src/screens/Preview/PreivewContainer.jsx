import React, { useState, useEffect, useCallback } from "react";

import PreviewPresenter from "./PreviewPresenter";
import { taskApi, monthlyApi, challengeApi } from "../../api";

const PreviewContainer = (previewProps) => {
  const { history } = previewProps;

  // state
  const [tasks, setTasks] = useState({
    pendingList: [],
    finishedList: [],
  });
  const [schedule, setSchedule] = useState({
    contents: [],
  });
  const [challenges, setChallenges] = useState([]);

  const filterTasks = (tasks) => {
    const filtered_PendingList = tasks.filter(
      (task) => task.status === "PENDING"
    );
    const filtered_FinishedList = tasks.filter(
      (task) => task.status === "FINISHED"
    );
    setTasks({
      pendingList: filtered_PendingList,
      finishedList: filtered_FinishedList,
    });
  };

  // funtions

  const filterMonthly = (monthly) => {
    const today = new Date();
    const date = today.toString().substring(0, 15);

    const scheduledPlan = monthly.find((plan) => plan.date === date);
    if (scheduledPlan) {
      const contents = scheduledPlan.contents;
      const formatChangedContents = [];

      for (const content of contents) {
        const data = {
          id: content.id,
          text: content.text,
          time: {
            hour: content.time.split(":")[0],
            min: content.time.split(":")[1],
          },
        };
        formatChangedContents.push(data);
      }
      setSchedule({ contents: formatChangedContents });
    } else {
      return;
    }
  };

  const filterChallenges = (challenges) => {
    const enrolledChallenges = challenges.filter(
      (challenge) => challenge.status === "ENROLLED"
    );
    setChallenges(enrolledChallenges.splice(0, 3));
  };

  const fetchData = useCallback(async () => {
    try {
      const tasks = await taskApi.getTasks();
      const monthly = await monthlyApi.getMonthly();
      const challenges = await challengeApi.getChallenges();

      filterTasks(tasks.data.tasks);
      filterMonthly(monthly.data.monthly);
      filterChallenges(challenges.data.challenges);
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      }
    }
  }, [history]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <PreviewPresenter
      tasks={tasks}
      schedule={schedule}
      challenges={challenges}
    />
  );
};

export default PreviewContainer;
