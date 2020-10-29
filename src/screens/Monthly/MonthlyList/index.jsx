import React from "react";

import {
  Container,
  Section,
  List,
  Header,
  Title,
  Wrapper,
  Scroll,
  Detail,
  Desc,
  BtnSection,
  EditLink,
  Btn,
} from "./styles";

const MonthlyList = (monthlyProps) => {
  const { date, contents, id, onConfirm, onEdit } = monthlyProps;

  return (
    <Container>
      <List tabIndex="0">
        <Title>{date.substring(0, 10)}</Title>
      </List>
      <Section>
        <Detail>
          <Header>Description</Header>
          <Wrapper>
            <Scroll>
              {contents.map((content, index) => {
                return <Desc key={index}>{content.text}</Desc>;
              })}
            </Scroll>
          </Wrapper>
        </Detail>

        <BtnSection>
          <EditLink to={`/edit`}>
            <Btn onClick={onEdit} id={id}>
              Edit
            </Btn>
          </EditLink>
          <Btn onClick={onConfirm} id={date}>
            Delete
          </Btn>
        </BtnSection>
      </Section>
    </Container>
  );
};

export default MonthlyList;
