import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImage from '../../assets/menu/banner3.jpg';
import OffersMenu from "./OffersMenu";
import { useMenu } from "../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import saladBg from "../../assets/menu/salad-bg.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const menus = useMenu();
    const saladMenu = menus.filter(menu => menu.category === "salad")
    const dessertMenu = menus.filter(menu => menu.category === "dessert")
    const pizzaMenu = menus.filter(menu => menu.category === "pizza")
    const soupMenu = menus.filter(menu => menu.category === "soup")
    return (
        <div>
            <Helmet><title>Bistro Boss Restaurant | Menu</title></Helmet>
            <Cover img={coverImage} title={"Our Menu"} description={"Would You Like To Try A Dish?"} />
            <OffersMenu />
            <MenuCategory coverImg={saladBg} coverTitle="Salads" coverDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam atque, libero illo illum quia accusamus, modi ipsam temporibus dicta cumque. Dolores, repellendus possimus quia est harum excepturi ipsam officia." menuItems={saladMenu} btnText="Order Your Favorite Food" />

            <MenuCategory coverImg={dessertBg} coverTitle="Desserts" coverDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam atque, libero illo illum quia accusamus, modi ipsam temporibus dicta cumque. Dolores, repellendus possimus quia est harum excepturi ipsam officia." menuItems={dessertMenu} btnText="Order Your Favorite Food" />
            <MenuCategory coverImg={pizzaBg} coverTitle="Pizzas" coverDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam atque, libero illo illum quia accusamus, modi ipsam temporibus dicta cumque. Dolores, repellendus possimus quia est harum excepturi ipsam officia." menuItems={pizzaMenu} btnText="Order Your Favorite Food" />
            <MenuCategory coverImg={soupBg} coverTitle="Soups" coverDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam atque, libero illo illum quia accusamus, modi ipsam temporibus dicta cumque. Dolores, repellendus possimus quia est harum excepturi ipsam officia." menuItems={soupMenu} btnText="Order Your Favorite Food" />
        </div>
    );
};

export default Menu;