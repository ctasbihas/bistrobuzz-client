import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../hooks/useMenu";
import MenuList from "../../Shared/MenuList/MenuList";

const PopularMenu = () => {
    const menu = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-20">
            <SectionTitle subHeading="Check It Out" heading="From Our Menu" />
            <MenuList items={popularMenu} btnText="View More" />
        </section>
    );
};

export default PopularMenu;