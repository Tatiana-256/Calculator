import React from "react";
import { Container, Sum, Wrapper } from "./CalculatorStyles";
import { CalcButton } from "../../features/CalcButton/CalcButton";
import { symbols, uniqueID } from "../../utils/commonUtils";
import { useDispatch } from "react-redux";
import { calculationActions } from "../../store/redux/actions";
import { CalculateWindow } from "../../features/CalculateWindow/CalculateWindow";

export const Calculator = () => {
  const dispatch = useDispatch();

  const calculate = (item: string) => {
    dispatch(calculationActions.addToCalcOperation(item));
  };

  const removeSymbol = () => {
    dispatch(calculationActions.removeSymbol());
  };

  const clearAll = () => {
    dispatch(calculationActions.clearAll());
  };

  const setSum = () => {
    dispatch(calculationActions.setMainSum());
  };

  return (
    <Container>
      <CalculateWindow />
      <Wrapper>
        <CalcButton calculator={clearAll} background="#d9d0d0">
          AC
        </CalcButton>
        <CalcButton calculator={removeSymbol}>X</CalcButton>
        {symbols.map((item) => (
          <CalcButton calculator={() => calculate(item)} key={uniqueID()}>
            {item}
          </CalcButton>
        ))}
        <Sum onClick={setSum}>=</Sum>
      </Wrapper>
    </Container>
  );
};
