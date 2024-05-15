import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs';
import { ControlReservation } from '../components/control-reservation/ControlReservation';
import { Outlet } from 'react-router-dom';

export const ReservationLayout = () => {
	return (
		<div>
			<Breadcrumbs paths={['Dashboard', 'Food']} />
			<ControlReservation />
			<Outlet />
		</div>
	);
};
