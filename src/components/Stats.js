import React, { useContext, useState } from "react";
import styled from "styled-components";

const Stats = ({ num, textlabel }) => {
  return (
    <Wrapper>
      <Num>{num}</Num>
      {textlabel}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-size: 16px;
  color: rgb(101, 119, 134);
  margin-right: 24px;
`;

const Num = styled.span`
  color: rgb(20, 23, 26);
  font-weight: bold;
`;
export default Stats;
