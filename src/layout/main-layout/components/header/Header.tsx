import { S } from "./Header_Styles";
import { Logo } from "../../../../components/logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { Date } from "./date/date";
import { UserIcon } from "../../../../components/user-icon/UserIcon";

import { ArrowBack } from "./arrow-back/ArrowBack";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import DinningOption from "./dinning-option/DinningOption";

export const Header = () => {
  return (
    <S.Header>
      <FlexWrapper align={"center"}>
        <ArrowBack />
        <Logo />
      </FlexWrapper>
      <S.Rabber>
        <Navigation />
        <DinningOption />
        <Date time={"10:53:00"} date={"26/02/2023"} />
        <UserIcon
          srcImg={
            "https://i.pinimg.com/736x/20/a2/20/20a220eb7dfbd6fadec763cf51699f0d.jpg"
          }
        />
      </S.Rabber>
    </S.Header>
  );
};
