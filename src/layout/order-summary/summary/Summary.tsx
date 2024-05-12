import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./../OrderSummary_Styles";

interface ISummaryProps {
  subTotal: number;
  Tax: number;
  Total: number;
}

export const Summary = ({ subTotal, Tax, Total }: ISummaryProps) => {
  return (
    <S.Summary>
      <FlexWrapper justify={"space-between"}>
        <S.Text>Sub Total</S.Text>
        <S.Sum>$ {subTotal}</S.Sum>
      </FlexWrapper>
      <FlexWrapper justify={"space-between"}>
        <S.Text>Tax (10%)</S.Text>
        <S.Sum>$ {Tax}</S.Sum>
      </FlexWrapper>
      <FlexWrapper justify={"space-between"}>
        <S.Text>Total</S.Text>
        <S.TotalSum>$ {Total}</S.TotalSum>
      </FlexWrapper>
    </S.Summary>
  );
};
