import { Button } from "../../../components/button/Button";
import { TextField } from "../../../components/text-field/TextField";
import { Switcher } from "../../../components/switcher/Switcher";

interface ICustomerInformationProps {}

export const CustomerInformation = ({}: ICustomerInformationProps) => {
  return (
    <div>
      <div>CustomerInformation</div>
      <Switcher />
      <TextField placeholder={"Customer name"} />
      <TextField placeholder={"Select table"} />
      <Button>Add note</Button>
    </div>
  );
};
