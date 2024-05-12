import { ReactChild } from "react";
import styled, { css } from "styled-components";

interface IButtonProps {
  children: ReactChild;
  primary?: boolean;
}

export const Button = ({ children, primary }: IButtonProps) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

type StyledButtonProps = {
  primary?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px;
  border-radius: 58px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.accent};
  font-weight: 600;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.colors.accent};
      color: ${(props) => props.theme.colors.primary};
      font-size: 16px;
      font-weight: 600;
    `}
`;
