import styled from "styled-components";
import { StyledSearch } from "../../components/search/Search";
import { StyledMenuFilter } from "../../components/menu-filter/MenuFilter";

const ControlFood = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.medium};
  ${StyledSearch}, ${StyledMenuFilter} {
    flex-grow: 1;
  }
`;

export const S = { ControlFood };
