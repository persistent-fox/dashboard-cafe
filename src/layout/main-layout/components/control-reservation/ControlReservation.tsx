import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Checkbox, EReservationType } from '../../../../components/checkbox/Checkbox';
import { Icon } from '../../../../components/icon/Icon';
import { MenuFilter } from '../../../../components/menu-filter/MenuFilter';
import { Search } from '../../../../components/search/Search';
import { ReservationFilterData } from '../../../../mock/data';
import { S } from './ControlReservation_Styles';

export const ControlReservation = () => {
	return (
		<S.ControlReservation>
			<FlexWrapper align='center' gap='32px'>
				<S.IconFrame to={'/dashboard/food'}>
					<Icon width='24' height='24' viewBox='0 0 24 24' iconId='arrow-back' />
				</S.IconFrame>
				<Checkbox
					reservationType={EReservationType.AVAILABLE}
					name='reservation'
					label='Available'
					idCheckbox='available'
				/>
				<Checkbox
					reservationType={EReservationType.RESERVED}
					name='reservation'
					reserved
					label='Reserved'
					idCheckbox='reserved'
				/>
				<Checkbox
					reservationType={EReservationType.BILLED}
					name='reservation'
					billed
					label='Billed'
					idCheckbox='billed'
				/>
				<Checkbox
					reservationType={EReservationType.AVAILABLESOON}
					name='reservation'
					availableSoon
					label='Available soon'
					idCheckbox='available-soon'
				/>
			</FlexWrapper>
			<FlexWrapper>
				<MenuFilter filterItems={ReservationFilterData} />
				<Search placeholder='Search table...' />
			</FlexWrapper>
		</S.ControlReservation>
	);
};
