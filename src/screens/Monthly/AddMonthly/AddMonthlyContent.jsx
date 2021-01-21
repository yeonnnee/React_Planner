import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { SubTitle, TimeColumn } from "../styles";
import {
  DelBtn,
  List,
  ListItem,
  Text,
  TimeMark,
  ContentText,
} from "./AddMonthly.styles";

const AddMonthlyContent = (monthlyProps) => {
  const { contents, deleteListItem } = monthlyProps;

  return (
    <>
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
              <DelBtn
                icon={faWindowClose}
                id={content.id}
                onClick={deleteListItem}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default AddMonthlyContent;
