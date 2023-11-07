import BLogCommunity from "../../componemts/BLogCommunity";
import Banner from "../../componemts/Banner/Banner";
import BlogImportant from "../../componemts/BlogImportant";
import RecentAdd from "../../componemts/recentAdd/recentAdd";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentAdd></RecentAdd>
            <BlogImportant></BlogImportant>
            <BLogCommunity></BLogCommunity>
        </div>
    );
};

export default Home;