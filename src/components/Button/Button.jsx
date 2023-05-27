const Button = ({ color, text, className }) => {
    return (
        <div className={className}>
            <button className={
                `px-7 py-5 border-b-4 border-[${color}] rounded-lg uppercase active:-translate-y-1`
            }>{text}</button>
        </div>
    );
};

export default Button;