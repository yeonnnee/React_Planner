import React from "react";

import ScheduleDate from "./PreviewScheduleDate";
import { TimeMark } from "../Monthly/MonthlyRecordForm/styles";
import { TimeColumn } from "../Monthly/styles";
import {
  Column,
  Tag,
  Monthly,
  Text,
  ScheduleSection,
  ListItem,
  SubTitle,
  ScheduleList,
  More,
} from "./styles";

const PreviewSchedule = (scheduleProps) => {
  const { schedule } = scheduleProps;

  return (
    <Column>
      <Tag>Today&apos;s Schedule</Tag>
      <Monthly>
        <ScheduleDate />
        <ScheduleSection>
          <SubTitle>
            <Text>DESCRIPTION</Text>
            <Text>TIME</Text>
          </SubTitle>
          <ScheduleList>
            {schedule.contents?.length > 0 ? (
              schedule.contents.map((content, index) => {
                return (
                  <ListItem key={index}>
                    {content.text}
                    <TimeColumn>
                      {content.time.hour !== "00" ? (
                        <>
                          <TimeMark>{content.time.hour}</TimeMark>
                          <TimeMark>:</TimeMark>
                          <TimeMark>{content.time.min}</TimeMark>
                        </>
                      ) : null}
                    </TimeColumn>
                  </ListItem>
                );
              })
            ) : (
              <Text>등록된 일정이 없습니다</Text>
            )}
          </ScheduleList>
          <More to="/monthly">더보기</More>
        </ScheduleSection>
      </Monthly>
    </Column>
  );
};
export default PreviewSchedule;
