import React from "react";
import styled from "styled-components";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorMessageSection = styled.div`
  margin-top: 8px;
  margin-left: 80px;
  font-size: 12px;
  color: #90323d;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const ErrorMessage = (error) => {
  return (
    <ErrorMessageSection>
      <SFontAwesomeIcon icon={faExclamationCircle} />
      {error.message}
    </ErrorMessageSection>
  );
};

export default ErrorMessage;
