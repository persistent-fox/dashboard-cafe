import { S } from './FoodCategory_Styles';
import { Icon } from '../../../../components/icon/Icon';

export const FoodCategory = () => {
	const list = [
		{
			id: 1,
			title: 'coffee',
			iconId: 'coffee',
			path: '/dashboard/coffee',
		},
		{
			id: 2,
			title: 'Beverages',
			iconId: 'beverages',
			path: '/dashboard/beverages',
		},
		{
			id: 3,
			title: 'Food',
			iconId: 'food',
			path: '/dashboard/food',
		},
		{
			id: 4,
			title: 'Appetizer',
			iconId: 'appetizer',
			path: '/dashboard/appetizer',
		},
		{
			id: 5,
			title: 'Bread',
			iconId: 'bread',
			path: '/dashboard/bread',
		},
		{
			id: 6,
			title: 'Snack',
			iconId: 'snack',
			path: '/dashboard/snack',
		},
	];

	return (
		<S.FoodCategory>
			<ul>
				{list.map(item => (
					<li key={item.id}>
						<S.Link to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
							<Icon width={'33'} height={'32'} viewBox={'0 0 33 32'} iconId={item.iconId} />
							<span>{item.title}</span>
						</S.Link>
					</li>
				))}
			</ul>
		</S.FoodCategory>
	);
};
