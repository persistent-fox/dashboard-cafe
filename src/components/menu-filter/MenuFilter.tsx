import styled from "styled-components";
import { TFoodFilterData } from "../../mock/data";
import { Button } from "../button/Button";

interface IMenuFilterProps {
  foodFilterItems: Array<TFoodFilterData>;
}

export const MenuFilter = ({ foodFilterItems }: IMenuFilterProps) => {
  return (
    <StyledMenuFilter>
      {foodFilterItems.map((item) => (
        <li key={item.id}>
          <Button secondary>{item.title}</Button>
        </li>
      ))}
    </StyledMenuFilter>
  );
};

export const StyledMenuFilter = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
`;
