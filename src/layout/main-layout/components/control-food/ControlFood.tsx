import { Search } from "../../../../components/search/Search";
import { S } from "./ControlFood_Styles";
import { MenuFilter } from "../../../../components/menu-filter/MenuFilter";
import { foodFilterData } from "../../../../mock/data";

interface IControlFoodProps {}

export const ControlFood = ({}: IControlFoodProps) => {
  return (
    <S.ControlFood>
      <Search placeholder={"Search menu..."} />
      <MenuFilter foodFilterItems={foodFilterData} />
    </S.ControlFood>
  );
};
