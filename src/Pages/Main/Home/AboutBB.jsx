import bg from "../../../assets/home/about-bg.png";

const AboutBB = () => {
    return (
        <section
            className="mx-20 mb-20 p-20"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="text-center bg-white p-10">
                <h1 className="text-3xl font-semibold font-cinzel mb-5">
                    Bistro Buzz
                </h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    blanditiis ipsa voluptatem nostrum, officia consequuntur aut
                    reprehenderit impedit excepturi culpa est, error unde.
                    Consequuntur sequi animi quidem quae, a adipisci quos
                    corrupti culpa expedita nulla quaerat accusamus harum,
                    molestias at tempora. Delectus voluptate molestiae ducimus
                    veniam sit quibusdam? Eius, hic.
                </p>
            </div>
        </section>
    );
};

export default AboutBB;
