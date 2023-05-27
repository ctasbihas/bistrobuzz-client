import Button from "../../components/Button/Button";

const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div>
                    <Button text="Add To Cart" color="#BB8506" className={""} />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;