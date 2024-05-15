import styled, { css } from 'styled-components';

export enum EReservationType {
	AVAILABLE = 'available',
	RESERVED = 'reserved',
	BILLED = 'billed',
	AVAILABLESOON = 'availableSoon',
}

type TCheckboxProps = {
	idCheckbox: string;
	label: string;
	name: string;
	available?: boolean;
	reserved?: boolean;
	billed?: boolean;
	availableSoon?: boolean;
	reservationType: EReservationType;
};

export const Checkbox = ({ idCheckbox, label, name, available, reserved, billed, availableSoon }: TCheckboxProps) => {
	return (
		<StyledCheckbox available={available} reserved={reserved} billed={billed} availableSoon={availableSoon}>
			<Input defaultChecked name={name} id={idCheckbox} type='checkbox' />
			<Label htmlFor={idCheckbox}>
				<FakeCheckbox available={available} reserved={reserved} billed={billed} availableSoon={availableSoon} />
				<span>{label}</span>
			</Label>
		</StyledCheckbox>
	);
};

type StyledCheckboxProps = {
	available?: boolean;
	reserved?: boolean;
	billed?: boolean;
	availableSoon?: boolean;
};

const Input = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	appearance: none;
	clip: rect(0 0 0 0);
`;

const FakeCheckbox = styled.span<StyledCheckboxProps>`
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.theme.colors.primary};
	border: 4px solid ${props => props.theme.colors.availableBorder};
	cursor: pointer;
	${props =>
		props.availableSoon &&
		css`
			border: 4px solid ${props => props.theme.colors.availableSoonBorder};
		`}
	${props =>
		props.reserved &&
		css`
			border: 4px solid ${props => props.theme.colors.reservedBorder};
		`}
	${props =>
		props.billed &&
		css`
			border: 4px solid ${props => props.theme.colors.billedBorder};
		`}
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
	${Input}:checked + ${Label} > ${FakeCheckbox} {
		background-color: ${props => props.theme.colors.availableCheck};
		border: 4px solid ${props => props.theme.colors.availableBorder};
	}

	${props =>
		props.availableSoon &&
		css`
			${Input}:checked + ${Label} > ${FakeCheckbox} {
				background-color: ${props => props.theme.colors.availableSoonCheck};
				border: 4px solid ${props => props.theme.colors.availableSoonBorder};
			}
		`}
	${props =>
		props.reserved &&
		css`
			${Input}:checked + ${Label} > ${FakeCheckbox} {
				background-color: ${props => props.theme.colors.reservedCheck};
				border: 4px solid ${props => props.theme.colors.reservedBorder};
			}
		`}
	${props =>
		props.billed &&
		css`
			${Input}:checked + ${Label} > ${FakeCheckbox} {
				background-color: ${props => props.theme.colors.billedCheck};
				border: 4px solid ${props => props.theme.colors.billedBorder};
			}
		`}
`;
