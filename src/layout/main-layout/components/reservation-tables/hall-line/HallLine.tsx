import { TListHallLinesData } from '../../../../../mock/data';
import { S } from './HallLine_Styles';

type HallLineProps = {
	listLines: Array<TListHallLinesData>;
};

export const HallLine = ({ listLines }: HallLineProps) => {
	return (
		<S.HallLine>
			{listLines.map(item => (
				<S.ListItem key={item.id}>{item.title}</S.ListItem>
			))}
		</S.HallLine>
	);
};
