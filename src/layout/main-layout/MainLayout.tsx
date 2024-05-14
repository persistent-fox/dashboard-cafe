import { Header } from "./components/header/Header";
import { FlexWrapper } from "../../components/FlexWrapper";
import { FoodCategory } from "./components/food-category/FoodCategory";
import { Main } from "../../components/Main";
import { Breadcrumbs } from "./components/breadcrumbs/Breadcrumbs";
import { ControlFood } from "./components/control-food/ControlFood";
import { Route, Routes } from "react-router-dom";
import { FoodMenu } from "./components/food-menu/FoodMenu";
import {
  beveragesCategoryData,
  coffeeCategoryData,
  foodCategoryData,
} from "../../mock/data";
import { OrderSummary } from "./components/order-summary/OrderSummary";

interface IMainLayoutProps {}

export const MainLayout = ({}: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <FlexWrapper justify={"space-between"}>
        <FoodCategory />
        <Main>
          <Breadcrumbs paths={["Dashboard", "Food"]} />
          <ControlFood />
          <Routes>
            <Route
              path={"/food"}
              element={<FoodMenu CategoryData={foodCategoryData} />}
            />
            <Route
              path={"/coffee"}
              element={<FoodMenu CategoryData={coffeeCategoryData} />}
            />
            <Route
              path={"/beverages"}
              element={<FoodMenu CategoryData={beveragesCategoryData} />}
            />
          </Routes>
        </Main>
        <OrderSummary />
      </FlexWrapper>
    </>
  );
};
