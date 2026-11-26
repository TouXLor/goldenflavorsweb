import { getMenuItemImage } from "../data/images";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  title: string;
  items: MenuItem[];
}

export const CATEGORIES: Category[] = [
  {
    id: "korean-corndogs",
    title: "Korean Corn Dogs",
    items: [
      {
        id: "original-dog",
        name: "Classic Corn Dog",
        price: "$9",
        desc: "Crispy fried hot dog with a golden batter, soy glaze, and a touch of sweet chili crunch.",
        image: getMenuItemImage("korean-corndogs", "original-dog"),
        popular: true,
      },
      {
        id: "hot-cheeto-dog",
        name: "Hot Cheeto Dog",
        price: "$9",
        desc: "Loaded with melty mozzarella, deep-fried until crisp, and finished with a smoky gochujang drizzle.",
        image: getMenuItemImage("korean-corndogs", "hot-cheeto-dog"),
      },
      {
        id: "potato-dog",
        name: "Potato Mozzarella Dog",
        price: "$9",
        desc: "A savory twist with crispy potato cubes on the outside, mozzarella inside, and a bold spicy-sweet finish.",
        image: getMenuItemImage("korean-corndogs", "potato-dog"),
      },
      {
        id: "ramen-dog",
        name: "Ramen Corn Dog",
        price: "$9",
        desc: "A crispy corn dog coated in crunchy ramen noodles.",
        image: getMenuItemImage("korean-corndogs", "ramen-dog"),
      },
    ],
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    items: [
      {
        id: "godzilla-roll",
        name: "Godzilla Roll",
        price: "$12",
        desc: "Tempura shrimp, avocado, cucumber, and spicy mayo wrapped in rice with eel sauce and sesame.",
        image: getMenuItemImage("sushi-rolls", "godzilla-roll"),
        popular: true,
      },
      {
        id: "california-roll",
        name: "California Roll",
        price: "$12",
        desc: "Classic crab, avocado, and cucumber rolled fresh with toasted sesame seeds.",
        image: getMenuItemImage("sushi-rolls", "california-roll"),
      },
      {
        id: "spicy-tiger-roll",
        name: "Spicy Tiger Roll",
        price: "$12",
        desc: "Spicy shrimp, cucumber, and fresh mango with a citrusy soy glaze and crunchy onion strings.",
        image: getMenuItemImage("sushi-rolls", "spicy-tiger-roll"),
      },
      {
        id: "hot-cheeto-roll",
        name: "Hot Cheeto Roll",
        price: "$12",
        desc: "Spicy shrimp, cucumber, and fresh mango with a citrusy soy glaze and crunchy onion strings.",
        image: getMenuItemImage("sushi-rolls", "hot-cheeto-roll"),
      },
      {
        id: "captain-crunch-roll",
        name: "Captain Crunch Roll",
        price: "$12",
        desc: "A signature sushi roll finished with a crunchy Captain Crunch topping.",
        image: getMenuItemImage("sushi-rolls", "captain-crunch-roll"),
      },
      {
        id: "tempura-shrimp-roll",
        name: "Tempura Shrimp Roll",
        price: "$12",
        desc: "Crispy tempura shrimp rolled with sushi rice and fresh ingredients.",
        image: getMenuItemImage("sushi-rolls", "tempura-shrimp-roll"),
      },
    ],
  },
  {
    id: "sushi-burrito",
    title: "Sushi Burritos",
    items: [
      {
        id: "godzilla-burrito",
        name: "Godzilla Burrito",
        price: "$15",
        desc: "Crispy tempura shrimp and crab meat rolled with fresh avocado and cucumber, topped with spicy mayo, sriracha, and crushed Cheetos.",
        image: getMenuItemImage("sushi-burrito", "godzilla-burrito"),
      },
      {
        id: "spicy-tiger-burrito",
        name: "Spicy Tiger Burrito",
        price: "$15",
        desc: "Tender proteins, crisp greens, pickled cucumber, and a signature savory-sweet sauce wrapped to perfection.",
        image: getMenuItemImage("sushi-burrito", "spicy-tiger-burrito"),
      },
      {
        id: "tempura-shrimp-burrito",
        name: "Tempura Shrimp Burrito",
        price: "$15",
        desc: "Crispy tempura shrimp wrapped sushi-burrito style with rice and fresh ingredients.",
        image: getMenuItemImage("sushi-burrito", "tempura-shrimp-burrito"),
      },
      {
        id: "treasure-taste-burrito",
        name: "Treasure Taste Burrito",
        price: "$16",
        desc: "A signature sushi burrito filled with a fresh mix of ingredients and sushi rice.",
        image: getMenuItemImage("sushi-burrito", "treasure-taste-burrito"),
        popular: true,
      },
    ],
  },
  {
    id: "sushi-bowl",
    title: "Sushi Bowls",
    items: [
      {
        id: "treasure-taste-bowl",
        name: "Treasure Taste Bowl",
        price: "$16",
        desc: "Fresh signature mix, avocado, pickled onions, edamame, and sushi rice with a bright ponzu drizzle.",
        image: getMenuItemImage("sushi-bowl", "treasure-taste-bowl"),
      },
      {
        id: "hot-cheeto-bowl",
        name: "Hot Cheeto Bowl",
        price: "$16",
        desc: "Crunchy elements, sticky glaze, cabbage slaw, cucumber, and savory toppings over warm seasoned rice.",
        image: getMenuItemImage("sushi-bowl", "hot-cheeto-bowl"),
        popular: true,
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        id: "mango-refresher",
        name: "Mango Refresher",
        price: "$7",
        desc: "Tropical sweet mango blended with refreshing chilled fruit notes.",
        image: getMenuItemImage("drinks", "mango-refresher"),
      },
      {
        id: "cloud-blue",
        name: "Cloud Blue",
        price: "$7",
        desc: "Crisp and floral with sparkling water, bright blue citrus syrup, and fresh lime.",
        image: getMenuItemImage("drinks", "cloud-blue"),
        popular: true,
      },
      {
        id: "lemonade",
        name: "Classic Lemonade",
        price: "$7",
        desc: "Refreshing hand-crafted sweet and tart lemonade.",
        image: getMenuItemImage("drinks", "lemonade"),
      },
      {
        id: "galaxy-drink",
        name: "Galaxy Drink",
        price: "$7",
        desc: "A colorful, refreshing signature drink.",
        image: getMenuItemImage("drinks", "galaxy-drink"),
      },
      {
        id: "ocean-blue",
        name: "Ocean Blue",
        price: "$7",
        desc: "A cool, refreshing blue drink.",
        image: getMenuItemImage("drinks", "ocean-blue"),
      },
      {
        id: "paradise-punch",
        name: "Paradise Punch",
        price: "$7",
        desc: "A bright, fruity signature punch.",
        image: getMenuItemImage("drinks", "paradise-punch"),
        popular: true,
      },
      {
        id: "passion-fruit",
        name: "Passion Fruit Drink",
        price: "$7",
        desc: "A refreshing drink with tropical passion fruit flavor.",
        image: getMenuItemImage("drinks", "passion-fruit"),
      },
      {
        id: "sunset-orange",
        name: "Sunset Orange",
        price: "$7",
        desc: "A refreshing orange-colored signature drink.",
        image: getMenuItemImage("drinks", "sunset-orange"),
      },
    ],
  },
  {
    id: "others",
    title: "Others",
    items: [
      {
        id: "sweet-chili-meatballs",
        name: "Sweet Chili Meatballs",
        price: "$8",
        desc: "Tender savory meatballs tossed in a sticky sweet chili glaze.",
        image: getMenuItemImage("others", "sweet-chili-meatballs"),
      },
      {
        id: "fries",
        name: "Crispy Fries",
        price: "$8",
        desc: "Golden-brown crispy fries seasoned to perfection.",
        image: getMenuItemImage("others", "fries"),
        popular: true,
      },
      {
        id: "sweet-chili-wings",
        name: "Sweet Chili Wings",
        price: "$8",
        desc: "Wings coated in a sweet and spicy chili sauce.",
        image: getMenuItemImage("others", "sweet-chili-wings"),
        popular: true,
      },
      {
        id: "oreo",
        name: "Oreo Treat",
        price: "$6",
        desc: "A sweet Oreo dessert.",
        image: getMenuItemImage("others", "oreo"),
      },
      {
        id: "shrimp-tempura",
        name: "Shrimp Tempura",
        price: "$8",
        desc: "Crispy battered shrimp tempura.",
        image: getMenuItemImage("others", "shrimp-tempura"),
      },
      {
        id: "chicken-tenders",
        name: "Crispy Chicken Tenders",
        price: "$8",
        desc: "Golden, crispy bite-sized chicken.",
        image: getMenuItemImage("others", "chicken-tenders"),
      },
    ],
  },
];
