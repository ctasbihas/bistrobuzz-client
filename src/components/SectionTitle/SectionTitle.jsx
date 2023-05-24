const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center border-y-4 py-4 mb-10">
            <i className="text-[#D99904] text-lg">---{subHeading}---</i>
            <h1 className="text-5xl uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;