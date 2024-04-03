import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [mail, setMail] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
    });

    const sendMail = (e) => {
        e.preventDefault();
        setStatus({
            loading: true,
            success: false,
            error: false,
        });

        fetch(`${import.meta.env.VITE_SERVER_URL}/contact`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(mail),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.messageId) {
                    setStatus({
                        loading: false,
                        success: true,
                        error: false,
                    });
                    toast.success("Mail Sent Successfully");
                    setMail({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    setStatus({
                        loading: false,
                        success: false,
                        error: false,
                    });
                    toast.error("Failed to send mail");
                }
            });
    };

    return (
        <section>
            <SectionTitle
                subHeading="Send Message"
                heading="Contact Us"
            />
            <div className="mx-80 mb-20">
                <form onSubmit={sendMail}>
                    <div className="flex gap-5">
                        <div className="w-full">
                            <label className="input input-bordered flex items-center gap-2 text-xl font-bold">
                                Name
                                <input
                                    type="text"
                                    className="grow focus:outline-none font-normal"
                                    placeholder="John Doe"
                                    required
                                    onChange={(e) =>
                                        setMail({
                                            ...mail,
                                            name: e.target.value,
                                        })
                                    }
                                    value={mail.name}
                                />
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="input input-bordered flex items-center gap-2 text-xl font-bold">
                                Email
                                <input
                                    type="email"
                                    className="grow focus:outline-none font-normal"
                                    placeholder="john@doe.com"
                                    required
                                    onChange={(e) =>
                                        setMail({
                                            ...mail,
                                            email: e.target.value,
                                        })
                                    }
                                    value={mail.email}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <label className="input input-bordered flex items-center gap-2 text-xl font-bold">
                            Subject
                            <input
                                type="text"
                                className="grow focus:outline-none font-normal"
                                placeholder="Website Issue"
                                required
                                onChange={(e) =>
                                    setMail({
                                        ...mail,
                                        subject: e.target.value,
                                    })
                                }
                                value={mail.subject}
                            />
                        </label>
                    </div>
                    <textarea
                        className="textarea textarea-bordered w-full mt-5 text-xl"
                        placeholder="Your Message"
                        required
                        id="message"
                        rows="10"
                        onChange={(e) =>
                            setMail({ ...mail, message: e.target.value })
                        }
                        value={mail.message}
                    ></textarea>
                    <button
                        className="btn mt-5"
                        disabled={status.loading}
                    >
                        {status.loading ? (
                            <span className="loading loading-spinner" />
                        ) : (
                            "Send"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
