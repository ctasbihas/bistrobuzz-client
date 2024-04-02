import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/contact/banner.jpg";

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
        </main>
    );
};

export default ContactUs;
