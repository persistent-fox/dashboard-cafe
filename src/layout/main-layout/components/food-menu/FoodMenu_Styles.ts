import styled from "styled-components";
import { StyledDishCard } from "../../../../components/dish-card/DishCard";

const FoodMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  padding: 16px;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
`;
export const S = {
  FoodMenu,
};
