import { Search } from "../../../../components/search/Search";
import { S } from "./ControlFood_Styles";
import { MenuFilter } from "../../../../components/menu-filter/MenuFilter";
import { foodFilterData } from "../../../../mock/data";

export const ControlFood = () => {
  return (
    <S.ControlFood>
      <Search placeholder={"Search menu..."} />
      <MenuFilter filterItems={foodFilterData} />
    </S.ControlFood>
  );
};
