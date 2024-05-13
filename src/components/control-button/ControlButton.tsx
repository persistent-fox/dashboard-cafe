import styled, { css } from "styled-components";
import { Icon } from "../icon/Icon";

interface IControlButtonProps {}

export const ControlButton = ({}: IControlButtonProps) => {
  return (
    <StyledControlButton>
      <Button>
        <Icon
          width={"20"}
          height={"20"}
          viewBox={"0 0 20 20"}
          iconId={"minus"}
        />
      </Button>
      <Count>1</Count>
      <Button plus>
        <Icon
          width={"20"}
          height={"20"}
          viewBox={"0 0 20 20"}
          iconId={"plus"}
        />
      </Button>
    </StyledControlButton>
  );
};

type ButtonProps = {
  plus?: boolean;
};

const StyledControlButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 8px;
  color: ${(props) => props.theme.colors.text.gray.medium};
  background: ${(props) => props.theme.colors.gray.light};

  ${(props) =>
    props.plus &&
    css`
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.text.secondary};
    `}
`;

const Count = styled.span`
  padding: 8px;
`;
