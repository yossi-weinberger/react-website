import Home from "../screens/home";
import Generators from "../screens/generators";
import About from "../screens/about";
import Contact from "../screens/contact";
import Speakers from "../screens/speakers";
import NewProduct from "../screens/new-product";

export const links = [
  {
    title: "Home",
    href: "/",
    element: <Home />,
  },
  {
    title: "Speakers",
    href: "/speakers",
    element: <Speakers />,
  },
  {
    title: "Generators",
    href: "/generators",
    element: <Generators />,
  },
  {
    title: "About",
    href: "/about",
    element: <About />,
  },
  {
    title: "Contact",
    href: "/contact",
    element: <Contact />,
  },
  {
    title: "New product",
    href: "/new-product",
    element: <NewProduct />,
  },
];
