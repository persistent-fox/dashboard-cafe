import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

interface IOptionItemProps {
	label: string;
	iconId: string;
}

export const OptionItem = ({ label, iconId }: IOptionItemProps) => {
	return (
		<Label>
			<Icon width={'24'} height={'24'} viewBox={'0 0 24 24'} iconId={iconId} />
			<Text>{label}</Text>
			<Input checked type='radio' />
			<Ratio />
		</Label>
	);
};

const Text = styled.span`
	flex-grow: 1;
`;

const Ratio = styled.span`
	display: block;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: ${props => props.theme.colors.primary};
	border: 1px solid ${props => props.theme.colors.text.gray.light};
`;

const Input = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);
	appearance: none;
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 16px 24px;
	border-radius: 16px;
	width: 100%;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	cursor: pointer;
	color: ${props => props.theme.colors.text.gray.dark};
	font-size: 16px;
	transition: all 0.3s;
	&:hover {
		font-weight: 500;
		color: ${props => props.theme.colors.text.accent};
		background-color: ${props => props.theme.colors.tertiary};
		border: 1px solid ${props => props.theme.colors.accent};
		${Ratio} {
			border: 1px solid ${props => props.theme.colors.accent};
		}
	}
	input:checked + ${Ratio} {
		position: relative;
		border: 1px solid ${props => props.theme.colors.accent};
		background-color: ${props => props.theme.colors.accent};
		&:before {
			content: url('./../../../../assets/images/check.svg');
			position: absolute;
			width: 12px;
			height: 12px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;
