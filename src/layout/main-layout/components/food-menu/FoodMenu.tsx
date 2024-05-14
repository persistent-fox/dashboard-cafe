import { foodCategoryData, TFoodCategoryData } from "../../../mock/data";
import { DishCard } from "../../../components/dish-card/DishCard";
import { S } from "./FoodMenu_Styles";

interface IFoodMenuProps {
  CategoryData: Array<TFoodCategoryData>;
}

export const FoodMenu = ({ CategoryData }: IFoodMenuProps) => {
  return (
    <S.FoodMenu>
      {CategoryData.map((item) => (
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
