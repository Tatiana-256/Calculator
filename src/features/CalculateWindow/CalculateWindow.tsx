import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux/store";
import { CalculateWrap } from "./CalculateWindowStyles";

export const CalculateWindow = () => {
  const { calcOperation, prevCalculation } = useSelector(
    (state: AppStateType) => state.calculation
  );

  return (
    <CalculateWrap>
      <div>
        <div>{calcOperation}</div>
        <div style={{ color: "gray" }}>{prevCalculation}</div>
      </div>
    </CalculateWrap>
  );
};
