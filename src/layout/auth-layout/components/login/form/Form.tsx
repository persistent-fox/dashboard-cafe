import { Button } from '../../../../../components/button/Button';
import { TextField } from '../../../../../components/text-field/TextField';
import { S } from './../Login_Styles';

export const Form = () => {
	return (
		<S.Form>
			<TextField
				placeholder='Enter username'
				iconId='login-username'
				widthIcon='24'
				heightIcon='24'
				viewBoxIcon='0 0 24 24'
			/>
			<TextField
				placeholder='Enter password'
				iconId='login-password'
				widthIcon='24'
				heightIcon='24'
				viewBoxIcon='0 0 24 24'
			/>
			<S.Link>Forgot password?</S.Link>
			<Button primary>Running order</Button>
		</S.Form>
	);
};
