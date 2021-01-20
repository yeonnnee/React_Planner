import React from "react";

import { SubTitle, Text, Wrapper, Scroll, List, ListItem } from "./styles";

const MonthlyContent = (monthlyProps) => {
  const { contents } = monthlyProps;
  console.log("monthlyContent", contents);
  return (
    <Wrapper>
      <Scroll>
        <SubTitle>
          <Text>DESCRIPTION</Text>
          <Text>TIME</Text>
        </SubTitle>
        <List>
          {contents.map((content, index) => {
            return <ListItem key={index}>{content.text}</ListItem>;
          })}
        </List>
      </Scroll>
    </Wrapper>
  );
};

export default MonthlyContent;
