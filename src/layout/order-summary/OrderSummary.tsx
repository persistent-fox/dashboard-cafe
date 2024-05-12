import { S } from "./OrderSummary_Styles";
import { OrderedMeal } from "../../components/ordered-meal/OrderedMeal";
import { orderedSummaryData } from "../../mock/data";
import { Title } from "../../components/Title";
import { Summary } from "./summary/Summary";
import { Button } from "../../components/button/Button";
import { CustomerInformation } from "./customer-information/CustomerInformation";

interface IOrderSummaryProps {}

export const OrderSummary = ({}: IOrderSummaryProps) => {
  return (
    <S.OrderSummary>
      <div>OrderSummary</div>
      <CustomerInformation />
      <Title>Orders details</Title>
      <S.List>
        {orderedSummaryData.map((item) => (
          <S.ListItem key={item.id}>
            <OrderedMeal title={item.title} price={item.price} />
          </S.ListItem>
        ))}
      </S.List>
      <Summary subTotal={62.13} Tax={1.87} Total={64.0} />
      <Button primary>Pay Now</Button>
    </S.OrderSummary>
  );
};
