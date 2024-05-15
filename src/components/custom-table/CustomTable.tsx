import styled from 'styled-components';

type TCustomTableProps = {
	tableTitles: string[];
	children: React.ReactNode;
};

export const CustomTable = ({ children, tableTitles }: TCustomTableProps) => {
	return (
		<StyledTable>
			<thead>
				<TitleFrame>
					{tableTitles.map(item => (
						<TableTitle>{item}</TableTitle>
					))}
				</TitleFrame>
			</thead>
			<tbody>{children}</tbody>
		</StyledTable>
	);
};

const StyledTable = styled.table`
	td {
		position: relative;
		padding: 16px;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1px;
			background-color: ${props => props.theme.colors.gray.medium};
		}
	}
`;

const TitleFrame = styled.tr`
	/* position: relative;
	&:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 2px;
		background-color: ${props => props.theme.colors.gray.medium};
	} */
`;

const TableTitle = styled.th`
	padding: 10px 16px;
	color: ${props => props.theme.colors.text.gray.medium};
	font-size: 12px;
	font-weight: 500;
`;
