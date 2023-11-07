import Banner from "../../componemts/Banner/Banner";
import BlogImportant from "../../componemts/BlogImportant";
import RecentAdd from "../../componemts/recentAdd/recentAdd";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentAdd></RecentAdd>
            <BlogImportant></BlogImportant>
        </div>
    );
};

export default Home;