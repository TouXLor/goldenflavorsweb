import type { GalleryImageKey } from "./images";

export const NAV_LINKS = [
  { label: "Home", id: "top" },
  { label: "Menu", id: "menu" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const TABS = [
  { label: "Sushi", target: "sushi-rolls" },
  { label: "Korean Corndogs", target: "korean-corn-dogs" },
  { label: "Drinks", target: "drinks" },
  { label: "Others", target: "others" },
];

/** Two bento rows; `flex` sets each tile's relative width. */
export const GALLERY: { image: GalleryImageKey; flex: number }[][] = [
  [
    { image: "sideways-cali", flex: 5 },
    { image: "rice-combo", flex: 3.5 },
    { image: "orange-sunset-overhead", flex: 3.5 },
  ],
  [
    { image: "cloud-blue-overhead", flex: 3.5 },
    { image: "tt-overhead", flex: 3.5 },
    { image: "combo-b", flex: 5 },
  ],
];
