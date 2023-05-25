import Cover from "../Cover/Cover";
import MenuList from "../MenuList/MenuList";

const MenuCategory = ({ coverImg, coverTitle, coverDescription, menuItems, btnText }) => {
    return (
        <div className="mb-12">
            <Cover img={coverImg} title={coverTitle} description={coverDescription} />
            <MenuList items={menuItems} btnText={btnText} />
        </div>
    );
};

export default MenuCategory;