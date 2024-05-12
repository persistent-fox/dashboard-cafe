import styled from "styled-components";
import { Title } from "../Title";

interface IDishCardProps {
  title: string;
  cost: number;
}

export const DishCard = ({ title, cost }: IDishCardProps) => {
  return (
    <StyledDishCard>
      <img
        src="https://www.tokyo-city.ru/images/interesno/ot-edy-bednyakov-do-izyskannykh.jpg"
        alt="dish"
      />
      <Title>{title}</Title>
      <Cost>$ {cost}</Cost>
    </StyledDishCard>
  );
};

const StyledDishCard = styled.article`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 8px 16px;
  border-radius: 16px;
  max-width: 220px;

  img {
    width: 202px;
    height: 158px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 12px;
  }

  ${Title} {
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
