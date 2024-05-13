import styled from "styled-components";
import { StyledDishCard } from "../../components/dish-card/DishCard";

const FoodMenu = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  ${StyledDishCard} {
    flex-grow: 1;
  }
`;
export const S = {
  FoodMenu,
};
