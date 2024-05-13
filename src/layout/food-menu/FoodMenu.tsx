import { foodCategoryData } from "../../mock/data";
import { DishCard } from "../../components/dish-card/DishCard";
import { S } from "./FoodMenu_Styles";

interface IFoodMenuProps {}

export const FoodMenu = ({}: IFoodMenuProps) => {
  return (
    <S.FoodMenu>
      {foodCategoryData.map((item) => (
        <DishCard
          key={item.id}
          filterId={item.filterId}
          srcImg={item.srcImg}
          title={item.title}
          cost={item.price}
        />
      ))}
    </S.FoodMenu>
  );
};
