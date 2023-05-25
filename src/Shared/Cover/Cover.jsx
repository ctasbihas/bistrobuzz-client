import { Parallax } from "react-parallax";

const Cover = ({img, title, description}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="Banner Image"
        strength={-200}
        className="mb-20"
        >
            <div className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-[#15151599] px-40 py-20 uppercase my-20">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;