import styled from 'styled-components';
import image from './../../../../assets/images/background.jpg';

const Login = styled.section`
	padding: 64px;
	background-image: url(${image});
`;

const LoginForm = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 54px 90px 72px;
	max-width: 620px;
	width: 100%;
	height: calc(100vh - 128px);
	border-radius: 16px;
	box-shadow: ${props => props.theme.colors.shadow};
	background-color: ${props => props.theme.colors.primary};
`;

const Text = styled.p`
	color: ${props => props.theme.colors.text.gray.dark};
	text-align: center;
	font-size: 16px;
	&:first-of-type {
		margin-bottom: 32px;
	}
`;

const Title = styled.h1`
	text-align: center;
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 16px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Link = styled.a`
	color: ${props => props.theme.colors.text.accent};
	font-weight: 600;
	margin-bottom: 12px;
`;
export const S = {
	Login,
	LoginForm,
	Text,
	Title,
	Form,
	Link,
};
