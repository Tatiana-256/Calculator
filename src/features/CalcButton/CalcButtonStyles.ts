import styled from "styled-components";

interface IStyle {
  background?: string;
  borderColor?: string;
}

export const Button = styled.div<IStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.25rem;
  width: 5.25rem;
  color: black;
  background-color: ${({ background }) => background || "white"};
  border: 1px solid ${({ borderColor }) => borderColor || "black"};
  font-size: 1.5rem;
`;
