const Button = ({color, text}) => {
    return (
        <div className={color === "black" && "flex justify-center" }>
            <button className={`px-7 py-5 border-b-4 border-[${color === "black" ? "#1F2937" : "#FFFFFF"}] rounded-lg uppercase active:-translate-y-1`}>{text}</button>
        </div>
    );
};

export default Button;