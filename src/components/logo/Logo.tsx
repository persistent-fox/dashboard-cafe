import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export const Logo = () => {
	return (
		<StyledLogo href={'#'}>
			<Icon iconId={'logo'} />
			<FlexWrapper align={'flex-start'} direction={'column'}>
				<Title>Walk-In</Title>
				<Description>Coca coffeetalk</Description>
			</FlexWrapper>
		</StyledLogo>
	);
};

export const StyledLogo = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	min-width: 176px;
	width: 100%;
`;

const Title = styled.span`
	font-size: 16px;
	font-weight: 600;
`;

const Description = styled.span`
	color: ${props => props.theme.colors.text.gray.dark};
`;
