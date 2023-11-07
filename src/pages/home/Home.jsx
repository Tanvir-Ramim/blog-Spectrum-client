import BLogCommunity from "../../componemts/BLogCommunity";
import Banner from "../../componemts/Banner/Banner";
import BlogImportant from "../../componemts/BlogImportant";
import NewsLetter from "../../componemts/NewsLetter";
import RecentAdd from "../../componemts/recentAdd/recentAdd";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentAdd></RecentAdd>
            <BlogImportant></BlogImportant>
            <NewsLetter></NewsLetter>
            <BLogCommunity></BLogCommunity>
        </div>
    );
};

export default Home;