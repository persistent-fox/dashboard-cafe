import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Button } from '../../../../components/button/Button';
import { S } from './../DinningOption_Styles';
import { OptionItem } from './option-item/OptionItem';
import { useState } from 'react';

type TOptionListProps = {
	isToggle: boolean;
};

export const OptionList = ({ isToggle }: TOptionListProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const onChangeHandler = () => {
		setIsChecked(prevState => !prevState);
	};

	return (
		<S.OptionList isToggle={isToggle}>
			<OptionItem
				name='dinning list'
				onChange={onChangeHandler}
				checked={isChecked}
				label={'Dine in'}
				iconId={'dine-in'}
			/>
			<OptionItem
				name='dinning list'
				onChange={onChangeHandler}
				checked={isChecked}
				label={'Take away'}
				iconId={'take-away'}
			/>
			<OptionItem
				name='dinning list'
				onChange={onChangeHandler}
				checked={isChecked}
				label={'Delivery'}
				iconId={'delivery'}
			/>
			<OptionItem
				name='dinning list'
				onChange={onChangeHandler}
				checked={isChecked}
				label={'Reservation'}
				iconId={'reservation'}
			/>
			<FlexWrapper>
				<Button tertiary>Cancel</Button>
				<Button>Apply</Button>
			</FlexWrapper>
		</S.OptionList>
	);
};
