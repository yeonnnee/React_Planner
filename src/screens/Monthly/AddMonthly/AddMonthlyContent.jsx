import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import {
  DelBtn,
  TimeSection,
  List,
  ListItem,
  Text,
  ContentText,
} from "./AddMonthly.styles";
import { SubTitle } from "../styles";

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
              <TimeSection>:</TimeSection>
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
