import styled, { css } from 'styled-components';
import { EReservationType } from '../../../../components/checkbox/Checkbox';
import { TTableType } from '../../../../mock/data';

const ReservationTables = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: calc(100vh - 184px);
	overflow-y: auto;
`;

const TableFrame = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, 170px);
	grid-template-rows: repeat(auto-fit, 170px);
	grid-auto-rows: repeat(auto, 170px);
	place-items: center;
	gap: 44px;
	justify-content: center;
	align-items: center;
	padding: 24px;
	flex-grow: 1;
`;

type TTableProps = {
	tableType: TTableType;
};

const Table = styled.div<TTableProps>`
	display: flex;
	align-items: center;
	gap: 6px;
	min-width: 170px;
	min-height: 170px;
	max-width: max-content;
	max-height: max-content;
	${props =>
		props.tableType === 'standardY' &&
		css`
			grid-column: span 2;
			grid-row: span 1;
		`}

	${props =>
		props.tableType === 'largeY' &&
		css`
			grid-column: span 2;
			grid-row: span 1;
		`}

	${props =>
		props.tableType === 'largeX' &&
		css`
			grid-column: span 1;
			grid-row: span 2;
		`}
`;

type NameProps = {
	type: EReservationType;
};

const TableTop = styled.div<NameProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 22px;
	border-radius: 16px;
	border: 1px solid ${props => props.theme.colors.gray.medium};
	background: ${props => props.theme.colors.primary};
	width: 100%;
	height: 100%;
	cursor: pointer;
	&:hover {
		outline: 1px solid ${props => props.theme.colors.availableCheck};
		${props =>
			props.type === 'reserved' &&
			css`
				outline: 1px solid ${props => props.theme.colors.reservedCheck};
			`}
		${props =>
			props.type === 'availableSoon' &&
			css`
				outline: 1px solid ${props => props.theme.colors.availableSoonCheck};
			`}
		${props =>
			props.type === 'billed' &&
			css`
				outline: 1px solid ${props => props.theme.colors.billedCheck};
			`}
	}
`;

const Name = styled.span<NameProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.availableCheck};
	background-color: ${props => props.theme.colors.availableBorder};
	font-size: 20px;
	font-weight: 600;
	width: 86px;
	height: 86px;
	border-radius: 50%;
	${props =>
		props.type === 'reserved' &&
		css`
			color: ${props => props.theme.colors.reservedCheck};
			background-color: ${props => props.theme.colors.reservedBorder};
		`}
	${props =>
		props.type === 'availableSoon' &&
		css`
			color: ${props => props.theme.colors.availableSoonCheck};
			background-color: ${props => props.theme.colors.availableSoonBorder};
		`}
	${props =>
		props.type === 'billed' &&
		css`
			color: ${props => props.theme.colors.billedCheck};
			background-color: ${props => props.theme.colors.billedBorder};
		`}
`;

const ChairY = styled.span`
	display: block;
	width: 50px;
	min-height: 14px;
	border-radius: 30px;
	border: 1px solid var(--Neutral-30, #e4e4e4);
	background: var(--Neutral-10, #fff);
`;

const ChairX = styled.span`
	display: block;
	width: 14px;
	height: 50px;
	border-radius: 30px;
	border: 1px solid var(--Neutral-30, #e4e4e4);
	background: var(--Neutral-10, #fff);
`;

type FrameProps = {
	columnDirection?: boolean;
};

const Frame = styled.div<FrameProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	padding: 0 30px;
	${props =>
		props.columnDirection &&
		css`
			flex-direction: column;
			padding: 30px 0;
		`}
`;

export const S = {
	ReservationTables,
	TableFrame,
	Table,
	TableTop,
	ChairY,
	ChairX,
	Frame,
	Name,
};
