import { S } from "./OrderSummary_Styles";
import { Summary } from "./summary/Summary";
import { Button } from "../../../../components/button/Button";
import { CustomerInformation } from "./customer-information/CustomerInformation";
import { OrdersDetails } from "./orders-details/OrdersDetails";

interface IOrderSummaryProps {}

export const OrderSummary = ({}: IOrderSummaryProps) => {
  return (
    <S.OrderSummary>
      <CustomerInformation />
      <OrdersDetails />
      <Summary subTotal={62.13} Tax={1.87} Total={64.0} />
    </S.OrderSummary>
  );
};
