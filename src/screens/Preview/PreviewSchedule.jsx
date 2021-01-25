import React from "react";

import ScheduleDate from "./PreviewScheduleDate";
import { Column, Tag, Monthly, Text, ScheduleList, ListItem } from "./styles";

const PreviewSchedule = (scheduleProps) => {
  const { schedule } = scheduleProps;

  return (
    <Column>
      <Tag>Today&apos;s Schedule</Tag>
      <Monthly>
        <ScheduleDate />
        <ScheduleList>
          {schedule?.contents.length > 0 ? (
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
