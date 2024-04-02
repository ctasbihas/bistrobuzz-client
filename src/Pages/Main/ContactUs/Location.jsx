import { FaClock } from "react-icons/fa";
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Location = () => {
    return (
        <section className="mx-40 mb-20">
            <SectionTitle
                subHeading="Visit Us"
                heading="Our Location"
            />
            <div className="grid grid-cols-3 gap-10 justify-center">
                <div>
                    <h1 className="text-3xl text-white flex justify-center py-2 bg-[#BB8506] text-center">
                        <MdPhoneInTalk />
                    </h1>
                    <h2 className="text-center mt-5 text-2xl font-bold">
                        Phone
                    </h2>
                    <p className="text-center text-lg font-light">0123456789</p>
                </div>
                <div>
                    <span className="text-3xl text-white flex justify-center py-2 bg-[#BB8506] text-center">
                        <MdLocationOn />
                    </span>
                    <h2 className="text-center mt-5 text-2xl font-bold">
                        Location
                    </h2>
                    <p className="text-center text-lg font-light">
                        123 Street, New York
                    </p>
                </div>
                <div>
                    <span className="text-3xl text-white flex justify-center py-2 bg-[#BB8506] text-center">
                        <FaClock />
                    </span>
                    <h2 className="text-center mt-5 text-2xl font-bold">
                        Working Hours
                    </h2>
                    <p className="text-center text-lg font-light">
                        Mon - Fri: 10:00 AM - 11:00 PM
                    </p>
                    <p className="text-center text-lg font-light">
                        Sat - Sun: 09:00 AM - 12:00 PM
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Location;
