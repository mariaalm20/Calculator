import React from "react";

import { Container, TextButton, Content } from "./styles";

interface TextProps {
  selectedNumber: string;
  lastSelectedNumber: string;
  isResult?: boolean
}

const Calc: React.FC<TextProps> = ({ isResult, selectedNumber, lastSelectedNumber }) => {
  return (
      <Content>
      <TextButton>{lastSelectedNumber}</TextButton>
      <TextButton isResult>{selectedNumber}</TextButton>
      </Content>
  );
};

export default Calc;
