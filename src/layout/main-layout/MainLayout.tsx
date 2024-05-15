import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { MenuLayout } from './layouts/menu-layout/MenuLayout';
import { ReservationLayout } from './layouts/ReservationLayout';
import { FoodMenu } from './components/food-menu/FoodMenu';
import { beveragesCategoryData, coffeeCategoryData, foodCategoryData, tablesData } from '../../mock/data';
import { ReservationTables } from './components/reservation-tables/ReservationTables';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/dashboard' element={<MenuLayout />}>
					<Route path={'*'} element={<Navigate to={'/dashboard'} />} />
					<Route path={'food'} element={<FoodMenu CategoryData={foodCategoryData} />} />
					<Route path={'coffee'} element={<FoodMenu CategoryData={coffeeCategoryData} />} />
					<Route path={'beverages'} element={<FoodMenu CategoryData={beveragesCategoryData} />} />
				</Route>
			</Routes>
			<Routes>
				<Route path='/reservation' element={<ReservationLayout />}>
					<Route index element={<ReservationTables tables={tablesData} />} />
				</Route>
			</Routes>
		</>
	);
};
