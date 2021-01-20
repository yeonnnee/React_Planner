import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import {
  DelBtn,
  TimeSeclect,
  Option,
  TimeSection,
  List,
  ListItem,
  Text,
  ContentText,
} from "./AddMonthly.styles";
import { SubTitle } from "../styles";

const AddMonthlyContent = (monthlyProps) => {
  const { contents } = monthlyProps;
  let hour = [];
  let min = [];
  for (let i = 0; i < 25; i++) {
    if (i < 10) {
      const result = "0" + i;
      hour.push(result);
    } else {
      hour.push(i);
    }
  }

  for (let i = 0; i < 60; i++) {
    if (i < 10) {
      const result = "0" + i;
      min.push(result);
    } else {
      min.push(i);
    }
  }
  return (
    <>
      <SubTitle>
        <Text>DESCRIPTION</Text>
        <Text>TIME</Text>
      </SubTitle>
      <List>
        {contents.map((content, index) => {
          return (
            <>
              <ListItem key={index}>
                <ContentText>{content.text}</ContentText>
                <TimeSection>
                  <TimeSeclect name="hour">
                    {hour.map((h, index) => (
                      <Option value={h} key={index}>
                        {h}
                      </Option>
                    ))}
                  </TimeSeclect>
                  :
                  <TimeSeclect name="min">
                    {min.map((m, index) => (
                      <Option value={m} key={index}>
                        {m}
                      </Option>
                    ))}
                  </TimeSeclect>
                </TimeSection>
                <DelBtn icon={faWindowClose} />
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};

export default AddMonthlyContent;
