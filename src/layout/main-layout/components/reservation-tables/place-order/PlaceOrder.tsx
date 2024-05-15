import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { Button } from '../../../../../components/button/Button';
import { Icon } from '../../../../../components/icon/Icon';
import { S } from './PlaceOrder_Styles';
import { TableCard } from './table-card/TableCard';

type TPlaceOrderProps = {
	order: number;
};

export const PlaceOrder = ({ order }: TPlaceOrderProps) => {
	return (
		<S.PlaceOrder>
			<FlexWrapper gap='16px' align='center'>
				<S.Frame>
					<Icon width='24' height='24' viewBox='0 0 24 24' iconId='place-order' />
				</S.Frame>
				<S.Info>
					<S.Title>Table</S.Title>
					<S.Text>Order #{order}</S.Text>
				</S.Info>
			</FlexWrapper>
			<FlexWrapper gap='16px'>
				<TableCard tableNumber='T-10' />
				<TableCard tableNumber='T-10' />
			</FlexWrapper>
			<Button primary>Place order</Button>
		</S.PlaceOrder>
	);
};
