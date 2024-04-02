import { useEffect, useState } from "react";
import FoodCard from "../../../Shared/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/menu/popular`)
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);
    return (
        <section className="mx-20 mb-20 py-10 text-center">
            <SectionTitle
                heading={"Chef Recommends"}
                subHeading={"Should Try"}
                width="md:w-5/12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {foods.map((food) => (
                    <FoodCard
                        key={food._id}
                        item={food}
                    />
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;
