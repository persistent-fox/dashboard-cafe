import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { FoodCategory } from '../../components/food-category/FoodCategory';
import { Main } from '../../../../components/Main';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { ControlFood } from '../../components/control-food/ControlFood';
import { Outlet, Route, Routes } from 'react-router-dom';
import { FoodMenu } from '../../components/food-menu/FoodMenu';
import { beveragesCategoryData, coffeeCategoryData, foodCategoryData } from '../../../../mock/data';
import { OrderSummary } from '../../components/order-summary/OrderSummary';

export const MenuLayout = () => {
	return (
		<>
			<FlexWrapper justify={'space-between'}>
				<FoodCategory />
				<Main>
					<Breadcrumbs paths={['Dashboard', 'Food']} />
					<ControlFood />
					<Outlet />
				</Main>
				<OrderSummary />
			</FlexWrapper>
		</>
	);
};
