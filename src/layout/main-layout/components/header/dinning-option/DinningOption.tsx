import { useState } from "react";
import { Button } from "../../../../components/button/Button";
import { S } from "./DinningOption_Styles";
import { OptionList } from "./option-list/OptionList";

const DinningOption = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onClickHandler = () => {
    setIsToggle((prevState) => !prevState);
  };

  return (
    <S.DinningOption>
      <Button onClick={onClickHandler}>Dinning option</Button>
      <OptionList isToggle={isToggle} />
    </S.DinningOption>
  );
};

export default DinningOption;
