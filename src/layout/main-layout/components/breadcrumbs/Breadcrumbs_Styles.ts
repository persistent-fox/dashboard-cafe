import styled from "styled-components";

const Breadcrumbs = styled.section`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.medium};
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.colors.text.gray.dark};
  padding: 0 12px 0 6px;
  font-size: 12px;
  font-weight: 500;
  &:first-child {
    padding: 0 12px 0 0;
  }
  &:not(:last-child) {
    color: ${(props) => props.theme.colors.text.accent};
    position: relative;
    &:before {
      content: "/";
      position: absolute;
      right: 0;
      top: 50%;
      color: ${(props) => props.theme.colors.text.accent};
      transform: translateY(-50%);
    }
  }
`;

export const S = {
  Breadcrumbs,
  List,
  ListItem,
};
