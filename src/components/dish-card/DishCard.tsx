import styled from "styled-components";

interface IDishCardProps {}

export const DishCard = ({}: IDishCardProps) => {
  return (
    <div>
      <div>DishCard</div>
      <span></span>
    </div>
  );
};

const StyledDishCard = styled.article`
  background-color: azure;
`;
