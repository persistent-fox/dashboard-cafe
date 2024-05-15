import { FlexWrapper } from '../../../../../components/FlexWrapper';
import { EReservationType } from '../../../../../components/checkbox/Checkbox';
import { TTableType } from '../../../../../mock/data';
import { S } from './../ReservationTables_Styles';
import { ChairsX } from './chairs/ChairsX';
import { ChairsY } from './chairs/ChairsY';

type TTableProps = {
	name: string;
	ChairX: number;
	ChairY: number;
	reservationType: EReservationType;
	tableType: TTableType;
};

export const Table = ({ name, ChairX, ChairY, reservationType, tableType }: TTableProps) => {
	return (
		<S.Table tableType={tableType}>
			<ChairsX ChairX={ChairX} />
			<FlexWrapper alignSelf='stretch' gap='6px' align='center' direction='column'>
				<ChairsY ChairY={ChairY} />

				<S.TableTop type={reservationType}>
					<S.Name type={reservationType}>{name}</S.Name>
				</S.TableTop>

				<ChairsY ChairY={ChairY} />
			</FlexWrapper>

			<ChairsX ChairX={ChairX} />
		</S.Table>
	);
};
