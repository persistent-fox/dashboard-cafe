import { Icon } from '../../../../../components/icon/Icon';
import { S } from './../../DinningOption_Styles';

interface IOptionItemProps {
	label: string;
	iconId: string;
	checked?: boolean;
	onChange: () => void;
	name: string;
}

export const OptionItem = ({ label, iconId, name, onChange, checked }: IOptionItemProps) => {
	return (
		<S.Label>
			<Icon width={'24'} height={'24'} viewBox={'0 0 24 24'} iconId={iconId} />
			<S.Text>{label}</S.Text>
			<S.Input name={name} checked={checked} onChange={onChange} type='radio' />
			<S.Ratio />
		</S.Label>
	);
};
