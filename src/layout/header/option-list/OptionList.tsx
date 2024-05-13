import { OptionItem } from "./option-item/OptionItem";
import { S } from "./../Header_Styles";

interface IOptionListProps {}

export const OptionList = ({}: IOptionListProps) => {
  return (
    <S.OptionList>
      <OptionItem label={"Dine in"} iconId={"dine-in"} />
      <OptionItem label={"Take away"} iconId={"dine-in"} />
    </S.OptionList>
  );
};
