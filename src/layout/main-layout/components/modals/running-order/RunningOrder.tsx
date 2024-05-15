import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { CustomTable } from '../../../../../components/custom-table/CustomTable';
import { S } from './RunningOrder_Styles';

const tableRowsData = [
	{
		id: 1,
		tableNumber: 'T-06',
		orderNumber: 46,
		description: 'Steak sapi bakar x 1.0..',
		price: 25.12,
		status: 'Running order',
		time: '35 minutes',
	},
	{
		id: 2,
		tableNumber: 'T-11',
		orderNumber: 47,
		description: 'Steak sapi bakar x 1.0..',
		price: 55.1,
		status: 'Done soon',
		time: '35 minutes',
	},
	{
		id: 3,
		tableNumber: 'T-09',
		orderNumber: 48,
		description: 'Steak sapi bakar x 1.0..',
		price: 15.55,
		status: 'Done',
		time: '35 minutes',
	},
];

export const RunningOrder = () => {
	return (
		<S.RunningOrder>
			<CustomTable tableTitles={['TABLE NUMBER', 'ORDER NUMBER', 'AMOUNT', 'STATUS', 'DINING FOR']}>
				{tableRowsData.map(item => (
					<tr>
						<td>{item.tableNumber}</td>
						<td>
							<FlexWrapper gap='4px' direction='column'>
								<span>#{item.orderNumber}</span>
								<span>{item.description}</span>
							</FlexWrapper>
						</td>
						<td>$ {item.price}</td>
					</tr>
				))}
			</CustomTable>
		</S.RunningOrder>
	);
};
