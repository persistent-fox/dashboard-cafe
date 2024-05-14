import { Icon } from '../../../../components/icon/Icon';
import { S } from './Login_Styles';
import { Form } from './form/Form';

export const Login = () => {
	return (
		<S.Login>
			<S.LoginForm>
				<Icon width='151' height='58' viewBox='0 0 151 58' iconId='logo-login' />
				<div>
					<S.Title>Login form</S.Title>
					<S.Text>Lorem Ipsum has been the industry's standard dummy text ever since.</S.Text>
					<Form />
				</div>
				<S.Text>End user agreement</S.Text>
			</S.LoginForm>
		</S.Login>
	);
};
