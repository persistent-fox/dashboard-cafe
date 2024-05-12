import { S } from "./../Header_Styles";

interface IDateProps {
  time: string;
  date: string;
}

export const Date = ({ time, date }: IDateProps) => {
  return (
    <S.Date>
      <span>{time}</span>
      <span>{date}</span>
    </S.Date>
  );
};
