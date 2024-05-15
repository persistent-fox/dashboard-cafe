import styled from "styled-components";
import { TFilterData } from "../../mock/data";
import { Button } from "../button/Button";

interface IMenuFilterProps {
  filterItems: Array<TFilterData>;
}

export const MenuFilter = ({ filterItems }: IMenuFilterProps) => {
  return (
    <StyledMenuFilter>
      {filterItems.map((item) => (
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
