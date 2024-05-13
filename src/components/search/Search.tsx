import styled from "styled-components";
import { Icon } from "../icon/Icon";

interface ISearchProps {
  placeholder?: string;
}

export const Search = ({ placeholder }: ISearchProps) => {
  return (
    <StyledSearch>
      <Input placeholder={placeholder} type="text" />
      <Icon
        width={"24"}
        height={"24"}
        viewBox={"0 0 24 24"}
        iconId={"search"}
      />
    </StyledSearch>
  );
};

export const StyledSearch = styled.div`
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
  width: 100%;
  border: none;
  border-right: 1px solid ${(props) => props.theme.colors.gray.medium};
  padding: 22px 24px 22px 58px;
  color: ${(props) => props.theme.colors.text.primary};
  font-feature-settings:
    "ss02" on,
    "clig" off,
    "liga" off;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  &::placeholder {
    color: ${(props) => props.theme.colors.text.gray.light};
  }
`;
