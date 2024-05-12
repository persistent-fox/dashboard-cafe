import styled from "styled-components";
import { DishCard } from "./components/dish-card/DishCard";
import { Header } from "./layout/header/Header";
import { FoodCategory } from "./layout/food-category/FoodCategory";
import { FlexWrapper } from "./components/FlexWrapper";
import { OrderSummary } from "./layout/order-summary/OrderSummary";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<DishCard title={"Steak sapi bakar"} cost={25.12} />*/}
      {/*<DishCard title={"Ayam kentang"} cost={15.4} />*/}
      <FlexWrapper justify={"space-between"}>
        <FoodCategory />
        <OrderSummary />
      </FlexWrapper>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
