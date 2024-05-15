import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { StyledButton } from '../../../../../components/button/Button';

const PlaceOrder = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 32px;
	position: sticky;
	margin: 0 24px;
	bottom: 20px;
	padding: 24px;
	border-radius: 16px;
	background: ${props => props.theme.colors.primary};
	box-shadow: 0px 16px 30px -6px rgba(25, 25, 28, 0.16);

	${FlexWrapper} {
		&:last-of-type {
			flex-grow: 1;
		}
	}

	${StyledButton} {
		padding: 12px 24px;
	}
`;

const Frame = styled.div`
	width: 48px;
	height: 48px;
	padding: 12px;
	border-radius: 16px;
	background: ${props => props.theme.colors.gray.light};
`;

const Info = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding-right: 32px;
	&:before {
		content: '';
		position: absolute;
		right: 0;
		height: 100%;
		width: 1px;
		background: ${props => props.theme.colors.gray.medium};
	}
`;

const Title = styled.span`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 4px;
`;

const Text = styled.span`
	color: ${props => props.theme.colors.text.gray.dark};
`;

const TableFrame = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 16px;
	padding: 0 32px;
`;

const TableCard = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: max-content;
	min-width: 42px;
	height: 42px;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	background: ${props => props.theme.colors.primary};
	font-size: 12px;
	font-weight: 500;

	span {
		position: absolute;
		top: -2px;
		right: -2px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: ${props => props.theme.colors.error};
		cursor: pointer;
	}
`;

export const S = { PlaceOrder, Frame, Info, Title, Text, TableCard, TableFrame };
