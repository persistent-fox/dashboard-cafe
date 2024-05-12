import { Icon } from "../../../components/icon/Icon";
import { S } from "./../Header_Styles";

export const Navigation = () => {
  const list = [
    {
      id: 1,
      title: "Home",
      iconId: "home",
    },
    {
      id: 2,
      title: "Order",
      iconId: "order",
    },
    {
      id: 3,
      title: "History",
      iconId: "history",
    },
    {
      id: 4,
      title: "Bills",
      iconId: "bills",
    },
  ];
  return (
    <S.Navigation>
      <S.List>
        {list.map((item) => (
          <li key={item.id}>
            <S.Link href="#">
              <Icon
                iconId={item.iconId}
                width={"24"}
                height={"24"}
                viewBox={"0 0 24 24"}
              />
              <span>{item.title}</span>
            </S.Link>
          </li>
        ))}
      </S.List>
    </S.Navigation>
  );
};
