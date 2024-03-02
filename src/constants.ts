import { BusinessProps } from "./types";
import gas from "./assets/imgs/gas.png";
import bbq from "./assets/imgs/grill.png";
import chicken from "./assets/imgs/chicken.png";
import crab from "./assets/imgs/crab.png";

export const businesses: BusinessProps[] = [
  {
    name: "Steamers",
    address: "1210 Gluckstadt Rd, Madison, Ms",
    website: "https://steamersshrimpandcrab.com/",
    icon: crab,
  },
  {
    name: "Boston Supreme",
    address: "2230 John R. Lynch St, Jackson, Ms",
    website: "https://www.restaurantji.com/ms/jackson/boston-fish-supreme-/",
    icon: chicken,
  },
  {
    name: "E&L BBQ",
    address: "1111 Bailey Ave, Jackson, Ms",
    website: "https://www.restaurantji.com/ms/jackson/e-and-l-barbeque-/",
    icon: bbq,
  },
  {
    name: "J&A Fuel",
    address: "1210 Gluckstadt Rd, Madison, MS",
    icon: gas,
  },
];

export const paths = {
  home: "/",
  links: "/links",
};
