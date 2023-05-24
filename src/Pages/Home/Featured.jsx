import Button from "../../components/Button/Button";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featureImage from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section style={{
            backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${featureImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className="text-white pt-20 mb-20 bg-fixed" >
            <SectionTitle subHeading="Check it out" heading="From Our Menu" />
            <div className="px-48 pb-20 flex items-center gap-10">
                <img className="w-[500px]" src={featureImage} alt="" />
                <div>
                    <h4 className="text-2xl">
                        <span>March 20, 2023</span><br />
                        <span>WHERE CAN I GET SOME?</span>
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <Button text="Read More" />
                </div>
            </div>
        </section>
    );
};

export default Featured;