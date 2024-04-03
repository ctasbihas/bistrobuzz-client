import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/contact/banner.jpg";
import ContactForm from "./ContactForm";
import Location from "./Location";

const ContactUs = () => {
    return (
        <main>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>
            <Cover
                img={coverImg}
                title={"Contact Us"}
                description={
                    "We are open for any suggestion or just to have a chat"
                }
            />
            <Location />
            <ContactForm />
        </main>
    );
};

export default ContactUs;
