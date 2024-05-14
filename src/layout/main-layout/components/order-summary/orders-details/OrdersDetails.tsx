import { Title } from "../../../../components/Title";
import { S } from "../OrderSummary_Styles";
import { orderedSummaryData } from "../../../../mock/data";
import { OrderedMeal } from "../../../../components/ordered-meal/OrderedMeal";

interface IOrdersDetailsProps {}

export const OrdersDetails = ({}: IOrdersDetailsProps) => {
  return (
    <S.OrdersDetails>
      <Title>Orders details</Title>
      <S.List>
        {orderedSummaryData.map((item) => (
          <S.ListItem key={item.id}>
            <OrderedMeal
              srcImg={item.img}
              title={item.title}
              price={item.price}
            />
          </S.ListItem>
        ))}
      </S.List>
    </S.OrdersDetails>
  );
};
