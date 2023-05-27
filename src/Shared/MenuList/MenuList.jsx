import Button from "../../components/Button/Button";

const MenuList = ({ items, btnText }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-20 mb-8">
                {items.map(item =>
                    <div key={item._id} className="flex border-r-2 border-b-2 p-3 space-x-4">
                        <img className="rounded-b-full rounded-tr-full w-32" src={item.image} alt="" />
                        <div>
                            <h2 className="flex justify-between text-xl">
                                <span className="">{item.name}----------</span>
                                <span className="text-[#BB8506]">${item.price}</span>
                            </h2>
                            <p className="text-[#737373]">{item.recipe}</p>
                        </div>
                    </div>
                )}
            </div>
            <Button className="flex justify-center" color={"#1F2937"} text={btnText} />
        </>
    );
};

export default MenuList;