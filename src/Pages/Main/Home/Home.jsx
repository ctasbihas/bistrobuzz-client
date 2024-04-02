import { Helmet } from "react-helmet-async";
import AboutBB from "./AboutBB";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import Call from "./Call";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Buzz Restaurant | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <AboutBB />
            <PopularMenu />
            <Call />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
