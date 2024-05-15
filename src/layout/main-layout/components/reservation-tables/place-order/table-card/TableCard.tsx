import { Icon } from '../../../../../../components/icon/Icon';
import { S } from './../PlaceOrder_Styles';

type TTableCardProps = {
	tableNumber: string;
};

export const TableCard = ({ tableNumber }: TTableCardProps) => {
	return (
		<S.TableCard>
			{tableNumber}
			<span>
				<Icon width='10' height='10' viewBox='0 0 10 10' iconId='order-close' />
			</span>
		</S.TableCard>
	);
};
