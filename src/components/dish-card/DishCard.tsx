import styled from "styled-components";
import { Title } from "../Title";

interface IDishCardProps {
  title: string;
  cost: number;
  srcImg: string;
  filterId: string;
}

export const DishCard = ({ title, cost, srcImg }: IDishCardProps) => {
  return (
    <StyledDishCard>
      <img src={srcImg} alt="dish" />
      <Title>{title}</Title>
      <Cost>$ {cost}</Cost>
    </StyledDishCard>
  );
};

export const StyledDishCard = styled.article`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 8px 16px;
  border-radius: 16px;

  img {
    display: block;
    width: 202px;
    height: 158px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 auto;
    margin-bottom: 12px;
  }

  ${Title} {
    text-align: center;
    margin-bottom: 4px;
  }
`;

const Cost = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.text.accent};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
