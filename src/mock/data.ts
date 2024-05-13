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

export type TFoodCategoryData = {
  id: number;
  title: string;
  price: number;
  filterId: string;
  srcImg: string;
};

export const foodCategoryData: Array<TFoodCategoryData> = [
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

export const coffeeCategoryData: Array<TFoodCategoryData> = [
  {
    id: 1,
    title: "Latte",
    price: 5.12,
    filterId: "latte",
    srcImg:
      "https://bialetti.ru/upload/medialibrary/6a6/6a6b85edef1e91dcd9fc1771d3de9390.jpg",
  },
  {
    id: 2,
    title: "Latte Step",
    price: 15.4,
    filterId: "latte",
    srcImg:
      "https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg",
  },
  {
    id: 3,
    title: "Macchiato light",
    price: 10.4,
    filterId: "macchiato",
    srcImg:
      "https://liliebakery.fr/wp-content/uploads/2023/10/Latte-macchiato-Lilie-Bakery.jpg",
  },
  {
    id: 4,
    title: "macchiato middle",
    price: 11.21,
    filterId: "macchiato",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Latte_macchiato_with_coffee_beans.jpg/1200px-Latte_macchiato_with_coffee_beans.jpg",
  },
  {
    id: 5,
    title: "Latte dark",
    price: 17.89,
    filterId: "latte",
    srcImg:
      "https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?",
  },
  {
    id: 6,
    title: "Cappuccino",
    price: 5.99,
    filterId: "cappuccino",
    srcImg:
      "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
  },
  {
    id: 7,
    title: "Macchiato light",
    price: 19.5,
    filterId: "macchiato",
    srcImg:
      "https://bigcupofcoffee.com/wp-content/uploads/2023/05/cafe-mocha.jpg",
  },
  {
    id: 8,
    title: "Starbucks",
    price: 12.43,
    filterId: "mocha",
    srcImg:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_Cappuccino.jpg?impolicy=1by1_wide_topcrop_630",
  },
  {
    id: 9,
    title: "Mocha",
    price: 8.24,
    filterId: "mocha",
    srcImg:
      "https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2021-06/CaffeMocha_Header.jpg.webp?itok=O9FqK5Y_",
  },
];

export const beveragesCategoryData: Array<TFoodCategoryData> = [
  {
    id: 1,
    title: "Penette",
    price: 5.12,
    filterId: "vine",
    srcImg:
      "https://buywinesonline.com/cdn/shop/files/1000StoriesBourbonBarrelAgedCabernetSauvignon_1.jpg?v=1698706018",
  },
  {
    id: 2,
    title: "Rosh",
    price: 15.4,
    filterId: "vine",
    srcImg:
      "https://target.scene7.com/is/image/Target/GUEST_fc04ebb4-06bc-4997-b27c-c4d2ac38165b?wid=488&hei=488&fmt=pjpeg",
  },
  {
    id: 3,
    title: "Jack",
    price: 10.4,
    filterId: "whisky",
    srcImg:
      "https://www.sandhamswine.co.uk/images/shop/more/600x600_426_bc7ccd27a6037b6cfa951f6d9d5df324_0660BB.jpg",
  },
  {
    id: 4,
    title: "Mead middle",
    price: 11.21,
    filterId: "mead",
    srcImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6BRPuVmU29KZE4LNPu9vrcuRUL3qZNzqozUapQkgng&s",
  },
  {
    id: 5,
    title: "Mead dark",
    price: 17.89,
    filterId: "mead",
    srcImg:
      "https://static.specsonline.com/wp-content/uploads/reload/008060040002.jpg",
  },
  {
    id: 6,
    title: "Classic",
    price: 5.99,
    filterId: "whisky",
    srcImg:
      "https://cdnb.artstation.com/p/assets/images/images/011/721/363/large/christophe-delahaye-front-small.jpg?1531071187",
  },
];
