import { useState } from "react";
import coverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../../Shared/FoodCard/FoodCard";
import { useMenu } from "../../../hooks/useMenu";

const Shop = () => {
    const tabTitles = ["Salads", "Pizzas", "Soups", "Desserts", "Drinks"];
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [menu] = useMenu();

    const handleTabSelect = (index) => {
        setActiveTabIndex(index);
    };
    return (
        <div>
            <Cover img={coverImg} title={"Our Shop"} description={"Would You Like To Try A Dish?"} />
            <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
                <TabList className="flex justify-center uppercase space-x-5 mb-12">
                    {tabTitles.map((title, index) => (
                        <Tab
                            key={index}
                            className="tab text-2xl border-b-4"
                            style={{
                                borderBottomColor: activeTabIndex === index ? "#BB8506" : "transparent",
                                color: activeTabIndex === index ? "#BB8506" : "",
                                paddingBottom: activeTabIndex === index ? "10px" : ""
                            }}
                        >
                            {title}
                        </Tab>
                    ))}
                </TabList>

                {tabTitles.map((title, index) => (
                    <TabPanel key={index}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-20 mb-20">
                            {
                                menu.filter(item => item.category === title.slice(0, -1).toLocaleLowerCase()).map(foodItem => <FoodCard key={foodItem._id} item={foodItem} />)
                            }
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Shop;