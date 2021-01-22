import React from "react";

import { TimeMark, ContentText } from "./MonthlyRecordForm/styles";
import {
  SubTitle,
  Text,
  Wrapper,
  Scroll,
  List,
  ListItem,
  TimeColumn,
} from "./styles";

const MonthlyContent = (monthlyProps) => {
  const { contents } = monthlyProps;

  return (
    <Wrapper>
      <Scroll>
        <SubTitle>
          <Text>DESCRIPTION</Text>
          <Text>TIME</Text>
        </SubTitle>
        <List>
          {contents.map((content, index) => {
            return (
              <ListItem key={index}>
                <ContentText>{content.text}</ContentText>
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
          })}
        </List>
      </Scroll>
    </Wrapper>
  );
};

export default MonthlyContent;
