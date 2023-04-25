import { facebook, instagram, linkedin, twitter } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    to: "/home",
  },
  {
    id: "about",
    title: "About",
    to: "/about",
  },
  {
    id: "product",
    title: "Product",
    to: "/product",
  },
  {
    id: "clients",
    title: "Clients",
    to: "/clients",
  },
  {
    id: "signup",
    title: "Sign Up",
    to: "/",
  },
  {
    id: "login",
    title: "Log In",
    to: "/login",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "/home",
      },
      {
        name: "How it Works",
        link: "/home",
      },
      {
        name: "Create",
        link: "/home",
      },
      {
        name: "Explore",
        link: "/home",
      },
      {
        name: "Terms & Services",
        link: "/home",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Partners",
        link: "/",
      },
      {
        name: "Suggestions",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Newsletters",
        link: "/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/",
      },
      {
        name: "Become a Partner",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Company",
        link: "/",
      },
      {
        name: "Profit",
        link: "/",
      },
      {
        name: "Become a Partner",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const product = [
  {
    id: 1,
    background: "bg-six ",
    name: "one",
    category: "clothes",
    desc: {
      date: "20 March 2014",
      user: "User Name",
      title: "Boost Your conversion rate",
      price: 10.99,
      stocked: false,
    },
  },
  {
    id: 2,
    background: "bg-two",
    name: "two",
    category: "clothes",
    desc: {
      date: "25 March 2018",
      user: "User Name",
      title: "Boost Your conversion rate1",
      price: 10.99,
      stocked: true,
    },
    year: 2018,
  },
  {
    id: 3,
    background: "bg-three",
    name: "three",
    category: "clothes",
    desc: {
      date: "02 March 2015",
      user: "User Name",
      title: "Boost Your conversion rate2",
      price: 10.99,
      stocked: false,
    },
    year: 2020,
  },
  {
    id: 4,
    background: "bg-four",
    name: "four",
    category: "mobile",
    desc: {
      date: "20 March 2016",
      user: "User Name",
      title: "Boost Your conversion rate3",
      price: 10.99,
      stocked: true,
    },
  },
  {
    id: 5,
    background: "bg-five",
    name: "five",
    category: "tv",
    desc: {
      date: "06 March 2001",
      user: "User Name",
      title: "Boost Your conversion rate4",
      price: 10.99,
      stocked: true,
    },
  },
];

export const data = [
  {
    category: "jewelery",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 2,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 10.99,
    stocked: false,
    name: "m30",
  },
  {
    category: "jewelery",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 90.99,
    stocked: true,
    name: "mui",
  },
  {
    category: "jewelery",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
    stocked: true,
    name: "m960",
  },
  {
    category: "jewelery",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.1,
    stocked: true,
    name: "m980",
  },
  {
    category: "jewelery",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
    stocked: true,
    name: "s90",
  },
  {
    category: "Tv",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
    stocked: true,
    name: "good",
  },
];

export const bands = [
  {
    id: 1,
    name: "Nightwish",
    albums: 9,
    members: 6,
    formed_in: 1996,
  },
  {
    id: 2,
    name: "Metallica",
    albums: 10,
    members: 4,
    formed_in: 1981,
  },
  {
    id: 3,
    name: "Nirvana",
    albums: 3,
    members: 3,
    formed_in: 1987,
  },
];
