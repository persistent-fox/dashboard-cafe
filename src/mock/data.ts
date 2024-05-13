export const orderedSummaryData = [
  {
    id: 1,
    title: "Steak sapi bakar",
    price: 25.12,
    img: "https://img.freepik.com/premium-photo/baked-chicken-thigh-honey-sauce-with-potatoes-restaurant-dish-menu-top-view_187166-53512.jpg",
  },
  {
    id: 2,
    title: "Ayam kentang",
    price: 15.4,
    img: "https://img.freepik.com/premium-photo/baked-chicken-thigh-honey-sauce-with-potatoes-restaurant-dish-menu-top-view_187166-53512.jpg",
  },
  {
    id: 3,
    title: "Mie kuah pedas",
    price: 11.21,
    img: "https://img.freepik.com/premium-photo/baked-chicken-thigh-honey-sauce-with-potatoes-restaurant-dish-menu-top-view_187166-53512.jpg",
  },
  {
    id: 4,
    title: "Nasi steak ayam",
    price: 10.1,
    img: "https://img.freepik.com/premium-photo/baked-chicken-thigh-honey-sauce-with-potatoes-restaurant-dish-menu-top-view_187166-53512.jpg",
  },
];

export type TFoodFilterData = {
  id: number;
  title: string;
  filterId: string;
};

export const foodFilterData: Array<TFoodFilterData> = [
  {
    id: 1,
    title: "All",
    filterId: "all",
  },
  {
    id: 2,
    title: "Chicken",
    filterId: "chicken",
  },
  {
    id: 3,
    title: "Seafood",
    filterId: "seafood",
  },
  {
    id: 4,
    title: "Pasta",
    filterId: "pasta",
  },
  {
    id: 5,
    title: "Rice bowl",
    filterId: "rice bowl",
  },
];

export const foodCategoryData = [
  {
    id: 1,
    title: "Ayam kentang",
    price: 25.12,
    filterId: "chicken",
    srcImg:
      "https://kartinki.pics/uploads/posts/2021-07/thumbs/1626992345_51-kartinkin-com-p-blyuda-visokoi-kukhni-yeda-krasivo-foto-59.jpg",
  },
  {
    id: 2,
    title: "Steak sapi bakar",
    price: 15.4,
    filterId: "pasta",
    srcImg:
      "https://img.freepik.com/premium-photo/baked-chicken-thigh-honey-sauce-with-potatoes-restaurant-dish-menu-top-view_187166-53512.jpg?w=1060",
  },
  {
    id: 3,
    title: "Ikan santan",
    price: 10.4,
    filterId: "chicken",
    srcImg:
      "https://img.freepik.com/premium-photo/top-view-on-finely-decorated-delicious-restaurant-dish-ai-generated_953425-718.jpg",
  },
  {
    id: 4,
    title: "Mie kuah pedas",
    price: 11.21,
    filterId: "pasta",
    srcImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ERka0y3jiH6EY4Uk83dvz7aZ-aPhleSuaYQ8jd83Eg&s",
  },
  {
    id: 5,
    title: "Kuah santan",
    price: 17.89,
    filterId: "chicken",
    srcImg:
      "https://food.pibig.info/uploads/posts/2023-03/1677938459_food-pibig-info-p-sluchainoe-blyudo-oboi-63.jpg",
  },
  {
    id: 6,
    title: "Mie gepeng telor",
    price: 5.99,
    filterId: "seafood",
    srcImg:
      "https://interiorscafe.ru/wp-content/uploads/samyye-neveroyatnyye-blyuda-mira-08.jpg",
  },
  {
    id: 7,
    title: "Nasi steak ayam",
    price: 19.5,
    filterId: "seafood",
    srcImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS736eYHCT0vM3Wqi24INebvZYaq8ePnD6WzqUeodU5TQ&s",
  },
  {
    id: 8,
    title: "Steak ikan santan",
    price: 12.43,
    filterId: "Rice bowl",
    srcImg:
      "https://amiel.club/uploads/posts/2022-03/thumbs/1647707174_34-amiel-club-p-kartinki-blyud-dlya-menyu-40.jpg",
  },
  {
    id: 9,
    title: "Nasi goreng putih",
    price: 8.24,
    filterId: "seafood",
    srcImg: "https://sotni.ru/wp-content/uploads/2023/08/krasivaia-eda-20.webp",
  },
  {
    id: 10,
    title: "Nasi ayam salad",
    price: 19.1,
    filterId: "chicken",
    srcImg:
      "https://medaboutme.ru/upload/medialibrary/88b/shutterstock_673973287.jpg",
  },
  {
    id: 11,
    title: "Mie putih ayam pedas",
    price: 26.17,
    filterId: "chicken",
    srcImg:
      "https://amiel.club/uploads/posts/2022-03/1647707161_8-amiel-club-p-kartinki-blyud-dlya-menyu-9.jpg",
  },
  {
    id: 12,
    title: "Cumi-cumi",
    price: 30.15,
    filterId: "pasta",
    srcImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9E2AXs4-Oqx274MrHhntE-7vM5c1dKp2bHXqpEYrHJg&s",
  },
];
