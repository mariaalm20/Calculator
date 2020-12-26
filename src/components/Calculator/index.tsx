import React, {useState} from "react";

import { Container, TextButton } from "./styles";
import Calc from "../TextCalculator";
import textbuttons from '../../assets/texbuttons.json'

interface TextProps {
  isCaracter?: boolean;
}

const Button: React.FC<TextProps> = ({isCaracter}) => {
  const [selectNumber, setSelectNumber] = useState("");
  const [lastSelectNumber, setLastSelectNumber] = useState("");

  function calculator() {
    const splitNumbers = selectNumber.split(" ");
    const operator = splitNumbers[1];
    console.log(splitNumbers);
    if (operator === "*") {
      setSelectNumber(
        (parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "/") {
      setSelectNumber(
        (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "+") {
      setSelectNumber(
        (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "-") {
      setSelectNumber(
        (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
    if (operator === "%") {
      setSelectNumber(
        (parseFloat(splitNumbers[0]) % parseFloat(splitNumbers[2])).toString()
      );
      return;
    }
  }

  function handleCalculator(item: String) {
    if (item === "*" || item === "/" || item === "+" || item === "-" || item === "%") {
      setSelectNumber(selectNumber + " " + item + " ");
      return;
    }
    if (item === "del") {
      console.log(selectNumber);
      setSelectNumber(selectNumber.substring(0, selectNumber.length - 1));
      return;
    }
    if (item === ".") {
      setSelectNumber(selectNumber + item);
      return;
    }
    if (item === "+/-") {
      return;
    }
    if (item === "C") {
      setLastSelectNumber("");
      setSelectNumber("");
      return;
    }
    if (item === "=") {
      setLastSelectNumber(selectNumber);
      calculator();
      return;
    }

    setSelectNumber(selectNumber + item);
  }

  return (
    <>
      <Calc
        selectedNumber={selectNumber}
        lastSelectedNumber={lastSelectNumber}
      />
      {textbuttons.map((item) => (
        <Container key={item} onPress={() => handleCalculator(item)}>
          {item == "C" ||
          item == "+/-" ||
          item == "%" ||
          item == "*" ||
          item == "-" ||
          item == "+" ||
          item == "=" ||
          item == "del" ||
          item == "/" ||
          item == "." ? (
            <TextButton isCaracter>{item}</TextButton>
          ) : (
            <TextButton>{item}</TextButton>
          )}
        </Container>
      ))}
    </>
  );
};

export default Button;
