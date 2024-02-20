import { shieldTick, support, truckFast } from "../assets/icons.index";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/imgs.index";

export const navLinks = [
  { label: "home", href: "#home" },
  { label: "about us", href: "#aboutUs" },
  { label: "products", href: "#products" },
  { label: "contact us", href: "#contact-us" },
];

export const statistics = [
  { label: "brands", value: "1k" },
  { label: "shops", value: "500" },
  { label: "customers", value: "250k" },
];

export const mainShoes = [bigShoe1, bigShoe2, bigShoe3];

export const popularProducts = [
  {
    imgUrl: shoe4,
    name: "Nike jordan Air jordan-01",
    price: "200.20",
    rating: "4.6",
  },
  {
    imgUrl: shoe5,
    name: "Nike Air Jordan-10",
    price: "210.14",
    rating: "4.7",
  },
  {
    imgUrl: shoe6,
    name: "Nike Air Jordan-100",
    price: "220.17",
    rating: "4.5",
  },
  {
    imgUrl: shoe7,
    name: "Nike Air Jordan-001",
    price: "230.60",
    rating: "4.1",
  },
];

export const services = [
  {
    iconUrl: truckFast,
    label: "free shipping",
    description:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    iconUrl: shieldTick,
    label: "Secure Payment",
    description:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    iconUrl: support,
    label: "Love to help you",
    description:
      "Our dedicated team is here to assist you every step of the way.",
  },
];
