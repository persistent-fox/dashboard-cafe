import { S } from "./../../ReservationTables_Styles";
type TChairProps = {
  ChairX: number;
};

export const ChairsX = ({ ChairX }: TChairProps) => {
  let chairs = Array.from({ length: ChairX / 2 }, (_, index) => index);

  return (
    <>
      {ChairX > 2 ? (
        <S.Frame columnDirection>
          {chairs.map((item) => (
            <S.ChairX key={item} />
          ))}
        </S.Frame>
      ) : (
        <S.ChairX />
      )}
    </>
  );
};
