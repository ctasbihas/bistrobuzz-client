import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../components/Button/Button";

const PopularMenu = () => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems)
            })
    }, []);
    return (
        <section className="mb-20">
            <SectionTitle subHeading="Popular Menu" heading="From Our Menu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-20 mb-8">
                {menu?.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            <Button color="black" text="View Full  Menu" />
        </section>
    );
};

export default PopularMenu;