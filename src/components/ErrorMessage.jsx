/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorMessageSection = styled.div`
  font-size: 12px;
  width: 100%;
  margin-top: 10px;
  color: #90323d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const ErrorMessage = ({ error }) => {
  return (
    <>
      {error !== "" ? (
        <ErrorMessageSection>
          <SFontAwesomeIcon icon={faExclamationCircle} />
          {error}
        </ErrorMessageSection>
      ) : null}
    </>
  );
};

export default ErrorMessage;
