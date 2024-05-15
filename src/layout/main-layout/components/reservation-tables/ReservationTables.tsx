import { Table } from './table/Table';
import { S } from './ReservationTables_Styles';
import { TTablesData, listHallLinesData } from '../../../../mock/data';
import { HallLine } from './hall-line/HallLine';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type TReservationTablesProps = {
	tables: Array<TTablesData>;
};

export const ReservationTables = ({ tables }: TReservationTablesProps) => {
	return (
		<S.ReservationTables>
			<S.TableFrame>
				{tables.map(item => (
					<Table
						tableType={item.tableType}
						reservationType={item.type}
						key={item.id}
						ChairX={item.chairsX}
						ChairY={item.chairsY}
						name={item.name}
					/>
				))}
			</S.TableFrame>
			<FlexWrapper direction='column' gap='24px'>
				<HallLine listLines={listHallLinesData} />
				<HallLine listLines={listHallLinesData} />
			</FlexWrapper>
		</S.ReservationTables>
	);
};
