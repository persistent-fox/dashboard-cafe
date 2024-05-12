import styled from "styled-components";
import { Title } from "../../components/Title";
import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledButton } from "../../components/button/Button";

const OrderSummary = styled.aside`
  background-color: ${(props) => props.theme.colors.primary};
  ${Title} {
    font-size: 20px;
    font-weight: 600;
  }
  ${StyledButton} {
    width: 100%;
  }
`;

const List = styled.ul`
  height: 324px;
  overflow: auto;
  padding: 0 12px;
  margin-bottom: 14px;
`;

const ListItem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.medium};
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.gray.medium};
  ${FlexWrapper} {
    width: 100%;
    &:last-child {
      padding-top: 16px;
      border-top: 1px dashed ${(props) => props.theme.colors.gray.medium};
    }
    &:nth-child(2) {
      padding-bottom: 4px;
    }
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.gray.dark};
  font-size: 16px;
`;

const Sum = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const TotalSum = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-size: 16px;
  font-weight: 600;
`;

export const S = {
  OrderSummary,
  ListItem,
  List,
  Summary,
  Text,
  Sum,
  TotalSum,
};
