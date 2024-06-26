import { Icon } from '../icon/Icon';
import styled from 'styled-components';

interface ITextFieldProps {
	label?: string;
	inputId?: string;
	placeholder?: string;
	iconId?: string;
	widthIcon?: string;
	heightIcon?: string;
	viewBoxIcon?: string;
}

export const TextField = ({
	label,
	inputId,
	placeholder,
	iconId,
	widthIcon,
	heightIcon,
	viewBoxIcon,
}: ITextFieldProps) => {
	return (
		<>
			{label && <label htmlFor={inputId}>{label}</label>}
			{iconId ? (
				<InputFrame>
					<StyledInput placeholder={placeholder} id={inputId} />
					<Icon viewBox={viewBoxIcon} height={heightIcon} width={widthIcon} iconId={iconId} />
				</InputFrame>
			) : (
				<StyledInput placeholder={placeholder} id={inputId} />
			)}
		</>
	);
};

export const StyledInput = styled.input`
	width: 100%;
	padding: 12px 16px 12px 40px;
	color: ${props => props.theme.colors.text.primary};
	font-feature-settings:
		'ss02' on,
		'clig' off,
		'liga' off;
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.2;
	border-radius: 58px;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	background: ${props => props.theme.colors.primary};
	&::placeholder {
		color: ${props => props.theme.colors.text.gray.light};
	}
`;

const InputFrame = styled.div`
	position: relative;
	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 12px;
	}
`;
