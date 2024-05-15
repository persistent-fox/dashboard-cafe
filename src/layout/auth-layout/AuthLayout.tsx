import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';

export const AuthLayout = () => {
	return (
		<Routes>
			<Route path={'/login'} element={<Login />} />
			<Route path={'*'} element={<Navigate to={'/login'} />} />
		</Routes>
	);
};
