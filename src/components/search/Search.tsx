import styled from "styled-components";
import { Icon } from "../icon/Icon";

interface ISearchProps {}

export const Search = ({}: ISearchProps) => {
  return (
    <StyledSearch>
      <Input type="text" />
      <Icon iconId={"search"} />
    </StyledSearch>
  );
};

export const StyledSearch = styled.input`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Input = styled.input`
  border-right: 1px solid ${(props) => props.theme.colors.gray.medium};
  padding: 22px 24px;
  color: ${(props) => props.theme.colors.text.gray.light};
  font-feature-settings:
    "ss02" on,
    "clig" off,
    "liga" off;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`;
