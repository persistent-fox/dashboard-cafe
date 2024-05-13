import { ReactChild } from "react";
import styled, { css } from "styled-components";

interface IButtonProps {
  children: ReactChild;
  primary?: boolean;
  secondary?: boolean;
}

export const Button = ({ children, primary, secondary }: IButtonProps) => {
  return (
    <StyledButton secondary={secondary} primary={primary}>
      {children}
    </StyledButton>
  );
};

type StyledButtonProps = {
  primary?: boolean;
  secondary?: boolean;
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

  ${(props) =>
    props.secondary &&
    css`
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 400;
      border-radius: 40px;
      color: ${(props) => props.theme.colors.secondary};
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.gray.medium};
      transition: all 0.3s;
      &:hover {
        font-weight: 600;
        color: ${(props) => props.theme.colors.accent};
        border: ${(props) => props.theme.colors.accent};
        border: 1px solid ${(props) => props.theme.colors.accent};
        background: ${(props) => props.theme.colors.tertiary};
      }
    `}
`;
