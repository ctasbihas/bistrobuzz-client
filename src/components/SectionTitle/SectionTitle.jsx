const SectionTitle = ({ heading, subHeading, width }) => {
    const containerWidth = width || "md:w-4/12";
  
    return (
      <div className={`mx-auto text-center border-y-4 py-4 mb-10 ${containerWidth}`}>
        <i className="text-[#D99904] text-lg">---{subHeading}---</i>
        <h1 className="text-5xl uppercase">{heading}</h1>
      </div>
    );
  };
  
  export default SectionTitle;
  