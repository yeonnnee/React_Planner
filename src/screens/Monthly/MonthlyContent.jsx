import React from "react";

import { TimeMark, ContentText } from "./AddMonthly/AddMonthly.styles";
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
                  {content.time !== "00:00" ? (
                    <>
                      <TimeMark>{content.time.split(":")[0]}</TimeMark>
                      <TimeMark>:</TimeMark>
                      <TimeMark>{content.time.split(":")[1]}</TimeMark>
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
