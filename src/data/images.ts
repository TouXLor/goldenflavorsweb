import heroBgCircle from "../assets/imgs/hero-bg-circle.png";
import fallbackImg from "../assets/imgs/Hero_Sushi_Sticker.webp";
import classicCorndog from "../assets/imgs/Corndogs/orginal.jpg";
import hotCheetoCorndog from "../assets/imgs/Corndogs/hot-cheeto-corndog.jpg";
import potatoCorndog from "../assets/imgs/Corndogs/potato.jpg";
import ramenCorndog from "../assets/imgs/Corndogs/ramen.jpg";
import cloudBlue from "../assets/imgs/Drinks/cloud-blue.png";
import galaxyDrink from "../assets/imgs/Drinks/galaxy-drink.png";
import lemonade from "../assets/imgs/Drinks/lemonade.png";
import mangoRefresher from "../assets/imgs/Drinks/mango-refresher.png";
import oceanBlue from "../assets/imgs/Drinks/ocean-blue.png";
import paradisePunch from "../assets/imgs/Drinks/paradise-punch.png";
import passionFruit from "../assets/imgs/Drinks/passion-fruit.png";
import sunsetOrange from "../assets/imgs/Drinks/sunset-orange.png";
import frenchFries from "../assets/imgs/Sides/french-fries.png";
import oreo from "../assets/imgs/Sides/oreo.jpg";
import sweetChiliMeatballs from "../assets/imgs/Sides/scc-meatballs.jpg";
import sweetChiliWings from "../assets/imgs/Sides/scc-wings.png";
import chickenTenders from "../assets/imgs/Sides/chicken-tenders.png";
import shrimpTempuraSides from "../assets/imgs/Sides/shrimp-tempuras-sides.png";
import hotCheetoBowl from "../assets/imgs/Sushi-Bowls/hot-cheeo-bowl.jpg";
import treasureTasteBowl from "../assets/imgs/Sushi-Bowls/tt-bowl.jpg";
import godzillaBurrito from "../assets/imgs/Sushi-Burritos/godzilla-burrito.jpg";
import spicyTigerBurrito from "../assets/imgs/Sushi-Burritos/spicy_tiger_burrito.jpeg";
import tempuraShrimpBurrito from "../assets/imgs/Sushi-Burritos/tempura-shrimp-burrito.jpg";
import treasureTasteBurrito from "../assets/imgs/Sushi-Burritos/tt-burrito.jpg";
import californiaRoll from "../assets/imgs/Sushi-Rolls/cali-roll.jpeg";
import captainCrunchRoll from "../assets/imgs/Sushi-Rolls/captain-crunch-roll.jpeg";
import godzillaRoll from "../assets/imgs/Sushi-Rolls/godzilla-roll.jpeg";
import hotCheetoRoll from "../assets/imgs/Sushi-Rolls/hot-cheeto-roll.jpeg";
import spicyTigerRoll from "../assets/imgs/Sushi-Rolls/spicy-tiger-roll.jpeg";
import tempuraShrimpRoll from "../assets/imgs/Sushi-Rolls/tempura-shrimp-roll.jpeg";
import cyanTruck from "../assets/imgs/cyan-truck.png";
import cloudBlueOverhead from "../assets/imgs/Gallery/cloud-blue-overhead.jpg";
import comboB from "../assets/imgs/Gallery/comboB.png";
import orangeSunsetOverhead from "../assets/imgs/Gallery/orange-sunset-overhead.jpg";
import riceCombo from "../assets/imgs/Gallery/rice-combo.jpg";
import sidewaysCali from "../assets/imgs/Gallery/sideways-cali.jpg";
import treasureTasteOverhead from "../assets/imgs/Gallery/tt-overhead.jpg";
import popularStar from "../assets/popular-star.svg";

export type ImageRegistry =
  | "hero-bg-circle"
  | "hero-sushi-platter"
  | "cyan-truck"
  | "about-us-images"
  | "footer-logo"
  | "popular-star";

const IMAGE_REGISTRY: Record<ImageRegistry, string> = {
  "hero-bg-circle": heroBgCircle,
  "hero-sushi-platter": fallbackImg,
  "cyan-truck": cyanTruck,
  "about-us-images": fallbackImg,
  "footer-logo": fallbackImg,
  "popular-star": popularStar,
};

export const getSiteImage = (key: ImageRegistry): string =>
  IMAGE_REGISTRY[key] ?? fallbackImg;

export const GALLERY_IMAGE_REGISTRY = {
  "cloud-blue-overhead": cloudBlueOverhead,
  "combo-b": comboB,
  "orange-sunset-overhead": orangeSunsetOverhead,
  "rice-combo": riceCombo,
  "sideways-cali": sidewaysCali,
  "tt-overhead": treasureTasteOverhead,
} as const;

export type GalleryImageKey = keyof typeof GALLERY_IMAGE_REGISTRY;

export type MenuParentCategory =
  | "korean-corndogs"
  | "sushi-rolls"
  | "sushi-burrito"
  | "sushi-bowl"
  | "drinks"
  | "combos"
  | "others";

export const MENU_IMAGE_REGISTRY: Record<
  MenuParentCategory,
  Record<string, string>
> = {
  "korean-corndogs": {
    "original-dog": classicCorndog,
    "hot-cheeto-dog": hotCheetoCorndog,
    "potato-dog": potatoCorndog,
    "ramen-dog": ramenCorndog,
  },
  "sushi-rolls": {
    "california-roll": californiaRoll,
    "spicy-tiger-roll": spicyTigerRoll,
    "captain-crunch-roll": captainCrunchRoll,
    "godzilla-roll": godzillaRoll,
    "hot-cheeto-roll": hotCheetoRoll,
    "tempura-shrimp-roll": tempuraShrimpRoll,
  },
  "sushi-burrito": {
    "godzilla-burrito": godzillaBurrito,
    "spicy-tiger-burrito": spicyTigerBurrito,
    "tempura-shrimp-burrito": tempuraShrimpBurrito,
    "treasure-taste-burrito": treasureTasteBurrito,
  },
  "sushi-bowl": {
    "treasure-taste-bowl": treasureTasteBowl,
    "hot-cheeto-bowl": hotCheetoBowl,
  },
  drinks: {
    "mango-refresher": mangoRefresher,
    "cloud-blue": cloudBlue,
    "ocean-blue": oceanBlue,
    "sunset-orange": sunsetOrange,
    "paradise-punch": paradisePunch,
    "galaxy-drink": galaxyDrink,
    "passion-fruit": passionFruit,
    lemonade,
  },
  combos: {},
  others: {
    "sweet-chili-meatballs": sweetChiliMeatballs,
    "sweet-chili-wings": sweetChiliWings,
    fries: frenchFries,
    oreo,
    "shrimp-tempura": shrimpTempuraSides,
    "chicken-tenders": chickenTenders,
  },
};

export const getMenuItemImage = (
  categoryId: MenuParentCategory,
  itemId: string,
): string => MENU_IMAGE_REGISTRY[categoryId][itemId] ?? fallbackImg;
