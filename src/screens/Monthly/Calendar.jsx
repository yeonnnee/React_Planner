import React, { useEffect, useState, useCallback } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { connect } from "react-redux";

import { SELECT_MONTHLY, CHANGE_MONTHLY } from "../../redux/types";

const MonthlyCalendar = styled(ReactCalendar)`
  width: 100%;
  padding: 10px;
`;

/* 
  다음 버튼을 눌러도 getMonthYear는 새로운 값을 받아오지 못하는 문제를 해결하기 위해 
  useEffect를 통해 init에 변화가 생길시 매 re render시켜 getMonthYear를 동작시켜야 했다. 
  이를 위해 clicked라는 state를 만들어 init 이 동작할때마다, state 값을 올려주었고, 
  state 값이 변경할때마다 init 은 동작하고, 
  useEffect가 발동하여 getMonthYear가 새로운 값을 받아올 수 있게 되었다.
  이때, clicked 함수를 사용하지 않고 바로 getMonthYear 와 init을 연결시켜버리면, 1달씩 밀려서 데이터가 저장되는 현상이 발생하게 된다.
*/

const Calendar = (calendarProps) => {
  const { select, change, state } = calendarProps;
  const [clicked, setClicked] = useState(0);

  // plans 삭제시 마크 지우는 함수
  const removeMark = useCallback(async () => {
    const monthYear = state.monthYear.split(" ");
    const year = monthYear[1];
    const month = monthYear[0];

    if (state.deleted) {
      const deletedItem_Date = state.deleted.split(" ")[2];
      if (deletedItem_Date.split("")[0] === "0") {
        return deletedItem_Date.split("")[1];
      }
      const deletedAbbr = await document.querySelector(
        `[aria-label= "${month} ${deletedItem_Date}, ${year}" ]`
      );
      if (deletedAbbr) {
        const dateBtn = deletedAbbr.parentNode;
        dateBtn.style.border = "";
        // deletedAbbr.style.padding = "";
        // deletedAbbr.style.borderRadius = "";
        // deletedAbbr.style.backgroundColor = "";
      }
    }
  }, [state.deleted, state.monthYear]);

  const markingDate = useCallback((plans, month, year) => {
    const targets = plans.map((plan) => {
      const number = plan.date.split(" ")[2];
      if (number.split("")[0] === "0") {
        return number.split("")[1];
      } else {
        return number;
      }
    });

    for (let i = 0; i < targets.length; i++) {
      const date = targets[i];
      const abbr = document.querySelector(
        `[aria-label= "${month} ${date}, ${year}" ]`
      );
      if (abbr) {
        const dateBtn = abbr.parentNode;
        dateBtn.style.border = "1px solid #AD8D92";
        // const div = document.createElement("div");
        // div.style.width = "10px";
        // div.style.height = "3px";
        // div.style.backgroundColor = "yellow";
        // div.style.position = "relative";
        // div.style.top = "-16px";
        // div.style.right = "-40px";
        // dateBtn.appendChild(div);
        // abbr.style.padding = "5px 13px";
        // abbr.style.borderRadius = "25px";
        // abbr.style.backgroundColor = "#AD8D92";
      }
    }
  }, []);

  // plans 있는 날짜 표시하는 함수
  const getPlans = useCallback(() => {
    const monthYear = state.monthYear.split(" ");
    const year = monthYear[1];
    const month = monthYear[0];

    const plans = state.plans.filter((plan) => {
      const planDate = plan.date.split(" ");
      return planDate[1] === month.substring(0, 3) && planDate[3] === year;
    });
    markingDate(plans, month, year);
  }, [state.monthYear, state.plans, markingDate]);

  // 날짜 선택 시 실행되는 함수
  const onClickDay = (event) => {
    const target = event.toString().substring(0, 15);
    select(target);
  };

  // 네비게이션 버튼 클릭시 년도, 월 갱신시키는 함수
  const init = useCallback(() => {
    const nextMonth = document.querySelector(
      ".react-calendar__navigation__next-button"
    );
    const nextYear = document.querySelector(
      ".react-calendar__navigation__next2-button"
    );
    const preYear = document.querySelector(
      ".react-calendar__navigation__prev2-button"
    );
    const preMonth = document.querySelector(
      ".react-calendar__navigation__prev-button"
    );
    nextMonth.onclick = () => setClicked(clicked + 1);
    nextYear.onclick = () => setClicked(clicked + 1);
    preMonth.onclick = () => setClicked(clicked + 1);
    preYear.onclick = () => setClicked(clicked + 1);
  }, [clicked]);

  // 년도, 월 받아오는 함수
  const getMonthYear = useCallback(async () => {
    const monthSection = await document.querySelector(
      ".react-calendar__navigation__label__labelText"
    );
    const monthYear = await monthSection.textContent;
    change(monthYear);
  }, [change]);

  useEffect(() => {
    getMonthYear();
    getPlans();
    removeMark();
    init();
  }, [getMonthYear, init, getPlans, removeMark]);

  return (
    <MonthlyCalendar
      calendarType={"US"}
      onClickDay={onClickDay}
      onClickMonth={init}
      locale="en-US"
    />
  );
};

function mapStateToProps(state) {
  return { state: state.monthlyReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    select: (date) => {
      dispatch({ type: SELECT_MONTHLY, payload: date });
    },
    change: (monthYear) => {
      dispatch({ type: CHANGE_MONTHLY, payload: monthYear });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
