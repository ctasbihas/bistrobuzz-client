import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/contact/banner.jpg";
import Location from "./Location";

const ContactUs = () => {
    return (
        <main>
            <Cover
                img={coverImg}
                title={"Contact Us"}
                description={
                    "We are open for any suggestion or just to have a chat"
                }
            />
            <Location />
        </main>
    );
};

export default ContactUs;
