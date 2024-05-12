import { S } from "./Header_Styles";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { Button } from "../../components/button/Button";
import { Date } from "./date/date";
import { UserIcon } from "../../components/user-icon/UserIcon";

import { ArrowBack } from "./arrow-back/ArrowBack";
import { FlexWrapper } from "../../components/FlexWrapper";

interface IHeaderProps {}

export const Header = ({}: IHeaderProps) => {
  return (
    <S.Header>
      <FlexWrapper align={"center"}>
        <ArrowBack />
        <Logo />
      </FlexWrapper>
      <S.Rabber>
        <Navigation />
        <Button>Dinning option</Button>
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
