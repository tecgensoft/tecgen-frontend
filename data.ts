import homeIcon from "./src/assets/images/bottom-home.svg";
import storeIcon from "./src/assets/images/bottom-store.svg";
import categoryIcon from "./src/assets/images/bottom-category.svg";
import cartIcon from "./src/assets/images/bottom-cart.svg";
import profileIcon from "./src/assets/images/bottom-profile.svg";
import home from "./src/assets/images/selected-home.svg";
// import store from "./src/assets/images/selected-store.svg";
import category from "./src/assets/images/selected-category.svg";
import cart from "./src/assets/images/selected-cart.svg";
import profile from "./src/assets/images/selected-profile.svg";

export const menu = [
  {
    id: 1,
    icon: homeIcon,
    selected: home,
    value: "Home",
    route: "/",
    isRoute: true,
  },

  {
    id: 3,
    icon: categoryIcon,
    selected: category,
    value: "Categories",
    route: "/category-overview",
    isRoute: true,
  },
  {
    id: 4,
    icon: cartIcon,
    selected: cart,
    value: "Cart",
    route: "/cart",
    isRoute: true,
  },
  {
    id: 5,
    icon: profileIcon,
    selected: profile,
    value: "Profile",
    route: "/profile",
    isRoute: true,
  },
];
