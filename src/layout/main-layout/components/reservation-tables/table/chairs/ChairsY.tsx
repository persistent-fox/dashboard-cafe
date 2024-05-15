import { S } from "./../../ReservationTables_Styles";

type TChairProps = {
  ChairY: number;
};

export const ChairsY = ({ ChairY }: TChairProps) => {
  let chairs = Array.from({ length: ChairY / 2 }, (_, index) => index);

  return (
    <>
      {ChairY > 2 ? (
        <S.Frame>
          {chairs.map((item) => (
            <S.ChairY key={item} />
          ))}
        </S.Frame>
      ) : (
        <S.ChairY />
      )}
    </>
  );
};
