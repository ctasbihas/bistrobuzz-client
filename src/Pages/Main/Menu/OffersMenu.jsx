import MenuList from "../../../Shared/MenuList/MenuList";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";

const OffersMenu = () => {
    const menu = useMenu();
    const offeredMenu = menu.filter(item => item.category === "offered");
    return (
        <section className="mb-20">
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
            <MenuList items={offeredMenu} btnText="Order Your Favorite Food" />
        </section>
    );
};

export default OffersMenu;