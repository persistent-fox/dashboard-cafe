import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Title } from "../Title";
import { ControlButton } from "../control-button/ControlButton";

interface IOrderedMealProps {
  title: string;
  price: number;
  srcImg: string;
}

export const OrderedMeal = ({ title, price, srcImg }: IOrderedMealProps) => {
  return (
    <StyledOrderedMeal>
      <FlexWrapper gap={"12px"}>
        <img src={srcImg} alt="dish" />
        <Info>
          <Title>{title}</Title>
          <FlexWrapper justify={"space-between"}>
            <FlexWrapper gap={"2px"} direction={"column"}>
              <Text>Price</Text>
              <Price>$ {price}</Price>
            </FlexWrapper>
            <ControlButton />
          </FlexWrapper>
        </Info>
      </FlexWrapper>
    </StyledOrderedMeal>
  );
};

export const StyledOrderedMeal = styled.article`
  min-width: 312px;
  img {
    width: 74px;
    height: 74px;
    object-fit: cover;
    border-radius: 12px;
  }

  ${Title} {
    margin-bottom: 8px;
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.gray.dark};
  font-size: 12px;
`;

const Price = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-size: 16px;
  font-weight: 600;
`;

const Info = styled.div`
  flex-grow: 1;
`;
