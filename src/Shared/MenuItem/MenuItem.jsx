const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex border-r-2 border-b-2 p-3 space-x-4">
            <img className="rounded-b-full rounded-tr-full w-32" src={image} alt="" />
            <div>
                <h2 className="flex justify-between text-xl">
                    <span className="">{name}----------</span>
                    <span className="text-[#BB8506]">${price}</span>
                </h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;