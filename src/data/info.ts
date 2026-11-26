export const INFO = {
  address: "12345 W Testing Ave, Milwaukee WI",
  email: "goldenflavor117@gmail.com",
  phone: "(414) 617-9144",
  facebook: "https://www.facebook.com/profile.php?id=61582021637238",
};

export const today = () =>
  new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

export const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INFO.address)}`;
