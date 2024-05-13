import { S } from "./Breadcrumbs_Styles";

interface IBreadcrumbsProps {
  paths: string[];
}

export const Breadcrumbs = ({ paths }: IBreadcrumbsProps) => {
  return (
    <S.Breadcrumbs>
      <S.List>
        {paths.map((item) => (
          <S.ListItem>{item}</S.ListItem>
        ))}
      </S.List>
    </S.Breadcrumbs>
  );
};
