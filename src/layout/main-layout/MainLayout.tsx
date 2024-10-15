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
			<Routes /*location='/dashboard-cafe'*/>
				<Route path={'/'} element={<Navigate to={'/dashboard-cafe/food'} />} />
				<Route path='/dashboard-cafe' element={<MenuLayout />}>
					<Route path={'*'} element={<Navigate to={'/dashboard-cafe/food'} />} />
					<Route path={'food'} element={<FoodMenu CategoryData={foodCategoryData} />} />
					<Route path={'coffee'} element={<FoodMenu CategoryData={coffeeCategoryData} />} />
					<Route path={'beverages'} element={<FoodMenu CategoryData={beveragesCategoryData} />} />
				</Route>
				<Route path='/reservation' element={<ReservationLayout />}>
					<Route index element={<ReservationTables tables={tablesData} />} />
				</Route>
				<Route path={'*'} element={<Navigate to={'/dashboard-cafe'} />} />
			</Routes>
		</>
	);
};
