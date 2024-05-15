import styled from 'styled-components';

const HallLine = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 24px;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	border-right: none;
	background-color: ${props => props.theme.colors.primary};
	&:first-child {
		border-top: none;
	}
`;

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	color: ${props => props.theme.colors.text.accent};
	background-color: ${props => props.theme.colors.tertiary};
	width: 77px;
	height: 77px;
	text-align: center;
	cursor: pointer;
	&:hover {
		color: ${props => props.theme.colors.text.secondary};
		background-color: ${props => props.theme.colors.accent};
	}
`;

export const S = { HallLine, ListItem };
