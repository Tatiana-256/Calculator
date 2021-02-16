import React, { ReactNode } from "react";
import { Button } from "./CalcButtonStyles";

interface IProps {
  children: ReactNode;
  calculator?: () => void;
  background?: string;
}

export const CalcButton: React.FC<IProps> = ({
  children,
  calculator,
  background,
}) => {
  return (
    <Button onClick={calculator} background={background}>
      {children}
    </Button>
  );
};
