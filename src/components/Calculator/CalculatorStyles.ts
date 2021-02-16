import styled from "styled-components";
import { Button } from "../../features/CalcButton/CalcButtonStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #80a8ee;
  justify-content: center;
  align-items: center;
  height: 40.5rem;
  width: 27.75rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5.25rem 5.25rem 5.25rem 5.25rem;
  grid-template-rows: 5.25rem 5.25rem 5.25rem 5.25rem;
  column-gap: 0.63rem;
  row-gap: 0.63rem;
`;

export const Sum = styled(Button)`
  width: 11.15rem;
  background-color: #ffbf0f;
`;
