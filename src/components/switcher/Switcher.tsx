import styled from "styled-components";

interface ISwitcherProps {}

export const Switcher = ({}: ISwitcherProps) => {
  return (
    <StyledSwitcher>
      <Input checked type="radio" id="switch-on" name={"action"} />
      <label htmlFor="switch-on">Buy</label>
      <Input type="radio" id="switch-off" name={"action"} />
      <LabelOff htmlFor="switch-off">Reservation</LabelOff>
      <Slider />
    </StyledSwitcher>
  );
};

const StyledSwitcher = styled.div`
  position: relative;
  display: flex;
  padding: 4px;
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray.light};
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    appearance: none;
    &:checked + label {
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
  label {
    position: relative;
    z-index: 1;
    width: 50%;
    padding: 8px 16px;
    transition: color 0.2s;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 140%;
  }
`;

const Slider = styled.span`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(50% - 1px);
  height: calc(100% - 2px);
  border-radius: 20px;
  transition: transform 0.2s;
  background-color: ${(props) => props.theme.colors.primary};
`;

const LabelOff = styled.label``;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;

  &:checked + ${LabelOff} + ${Slider} {
    transform: translateX(100%);
  }
`;
