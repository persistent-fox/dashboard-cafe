import styled, { css } from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { StyledButton } from '../../../../../components/button/Button';
import check from '../../../../../assets/images/check.svg';

const DinningOption = styled.div`
	position: relative;
	button {
		position: relative;
		padding: 8px 20px;
	}
`;

type TOptionList = {
	isToggle: boolean;
};

const OptionList = styled.ul<TOptionList>`
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 366px;
	padding: 16px;
	visibility: hidden;
	border-radius: 16px;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	background-color: ${props => props.theme.colors.primary};
	z-index: 2;
	${props =>
		props.isToggle &&
		css`
			visibility: visible;
		`}

	${FlexWrapper} {
		display: flex;
		gap: 12px;
	}
	${StyledButton} {
		padding: 12px;
		width: 50%;
	}
`;

const Text = styled.span`
	flex-grow: 1;
`;

const Ratio = styled.span`
	display: block;
	width: 20px;
	height: 20px;
	padding: 4px;
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
	transition: color 0.3s;

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
			content: url(${check});
			position: absolute;
			width: 12px;
			height: 18px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

export const S = {
	DinningOption,
	OptionList,
	Text,
	Ratio,
	Input,
	Label,
};
