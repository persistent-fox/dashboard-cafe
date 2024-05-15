import { MainLayout } from './layout/main-layout/MainLayout';
import { AuthLayout } from './layout/auth-layout/AuthLayout';
import { useState } from 'react';

function App() {
	const [isLogin, setIsLogin] = useState(true);
	// const onHandleClick = () => {
	// 	setIsLogin(prevState => !prevState);
	// };
	return <div className='App'>{isLogin ? <MainLayout /> : <AuthLayout />}</div>;
}

export default App;
