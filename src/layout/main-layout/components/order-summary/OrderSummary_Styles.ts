import styled from "styled-components";
import { Title } from "../../../../components/Title";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledButton } from "../../../../components/button/Button";
import { StyledSwitcher } from "../../../../components/switcher/Switcher";

const OrderSummary = styled.aside`
  padding: 16px 0 24px;
  background-color: ${(props) => props.theme.colors.primary};
  border-left: 1px solid ${(props) => props.theme.colors.gray.medium};
  height: calc(100vh - 83px);
  ${Title} {
    font-size: 20px;
    font-weight: 600;
  }
  ${StyledButton} {
    width: 100%;
  }
`;

// Блок с деталями о покупателе

const CustomerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px 24px 24px;
  ${StyledSwitcher} {
    margin-bottom: 8px;
  }
`;

const CustomerTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

// Блок с деталями заказа

const OrdersDetails = styled.div`
  position: relative;
  padding: 24px;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.gray.medium};
  }
`;

const List = styled.ul`
  height: 324px;
  overflow: auto;
  padding: 16px 12px 0;
`;

const ListItem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.medium};
`;

// Блок с оплатой

const Summary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  align-items: flex-start;
  border-top: 1px solid ${(props) => props.theme.colors.gray.medium};
  ${FlexWrapper} {
    width: 100%;
    &:last-of-type {
      border-top: 1px dashed ${(props) => props.theme.colors.gray.medium};
      padding-top: 16px;
      padding-bottom: 8px;
    }
    &:nth-child(2) {
      padding-bottom: 4px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.gray.medium};
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
  CustomerInformation,
  CustomerTitle,
  OrdersDetails,
  ListItem,
  List,
  Summary,
  Text,
  Sum,
  TotalSum,
};
