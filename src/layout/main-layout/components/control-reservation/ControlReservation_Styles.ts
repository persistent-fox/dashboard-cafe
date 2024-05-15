import styled from 'styled-components';
import { StyledMenuFilter } from '../../../../components/menu-filter/MenuFilter';
import { StyledSearch } from '../../../../components/search/Search';

const ControlReservation = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.colors.primary};
	border-bottom: 1px solid ${props => props.theme.colors.gray.medium};
	${StyledMenuFilter} {
		gap: 16px;
		border-right: 1px solid ${props => props.theme.colors.gray.medium};
	}
	${StyledSearch} {
		border: none;
	}
`;

const IconFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 22px 24px;
	border-right: 1px solid ${props => props.theme.colors.gray.medium};
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.colors.gray.medium};
	}
`;

export const S = { ControlReservation, IconFrame };
