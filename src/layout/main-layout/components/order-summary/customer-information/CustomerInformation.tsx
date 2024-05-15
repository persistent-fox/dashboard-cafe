import { Button } from '../../../../../components/button/Button';
import { TextField } from '../../../../../components/text-field/TextField';
import { Switcher } from '../../../../../components/switcher/Switcher';
import { S } from '../OrderSummary_Styles';

interface ICustomerInformationProps {}

export const CustomerInformation = ({}: ICustomerInformationProps) => {
	return (
		<S.CustomerInformation>
			<Switcher />
			<S.CustomerTitle>Customer Information</S.CustomerTitle>
			<TextField placeholder={'Customer name'} />
			{/* <TextField placeholder={"Select table"} /> */}
			<S.Link to='/reservation'>Select table</S.Link>
			<Button>Add note</Button>
		</S.CustomerInformation>
	);
};
