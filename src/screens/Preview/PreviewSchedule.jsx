import React from "react";

import Calendar from "../Monthly/Calendar/PreviewCalendar";
import { Column, Tag, Monthly, Text, ScheduleList, ListItem } from "./styles";

const PreviewSchedule = (schedulProps) => {
  const { schedule } = schedulProps;

  return (
    <Column>
      <Tag>Today&apos;s Schedule</Tag>
      <Monthly>
        <Calendar />

        <ScheduleList>
          {schedule.length > 0 ? (
            schedule.contents.map((content, index) => {
              return <ListItem key={index}>{content.text}</ListItem>;
            })
          ) : (
            <Text>등록된 일정이 없습니다</Text>
          )}
        </ScheduleList>
      </Monthly>
    </Column>
  );
};
export default PreviewSchedule;
