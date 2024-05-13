import styled from "styled-components";
import { DishCard } from "./components/dish-card/DishCard";
import { Header } from "./layout/header/Header";
import { FoodCategory } from "./layout/food-category/FoodCategory";
import { FlexWrapper } from "./components/FlexWrapper";
import { OrderSummary } from "./layout/order-summary/OrderSummary";
import { ControlFood } from "./layout/control-food/ControlFood";
import { Main } from "./components/Main";
import { Breadcrumbs } from "./layout/breadcrumbs/Breadcrumbs";
import { FoodMenu } from "./layout/food-menu/FoodMenu";
import {
  beveragesCategoryData,
  coffeeCategoryData,
  foodCategoryData,
} from "./mock/data";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
