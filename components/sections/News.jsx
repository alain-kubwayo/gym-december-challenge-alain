import Wrapper from '../ui/Wrapper';
import { newsOne } from '../../shareable/news';
import { newsTwo } from '../../shareable/news';
import NewsCard from '../ui/NewsCard';


const News = () => {
    return ( 
        <Wrapper>
            <div>
                <div className="block mb-6 space-y-6 md:hidden">
                    <h1 className="text-8xl">News from TUM</h1>
                    <p className="text-xl">News, research results and events: everything that enthuses people at our university.</p>
                    <button className="px-5 py-4 text-base text-white uppercase bg-primary-300">See All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:mt-12 md:gap-x-12">
                    <div className="hidden space-y-6 md:block">
                        <h1 className="text-8xl">News from TUM</h1>
                        <p className="text-xl">News, research results and events: everything that enthuses people at our university.</p>
                        <button className="px-5 py-4 text-base text-white uppercase bg-primary-300">See All</button>
                    </div>
                    <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                        {newsOne.map((news, id) => <NewsCard news={news} key={id} />)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-6 w-full xl:w-[696px] md:relative md:left-[40%] mt-12">
                        {newsTwo.map((news, id) => <NewsCard news={news} key={id} />)}
                    </div>
                </div>
                <div className="hidden md:block">
                </div>
            </div>
        </Wrapper>
    );
}
 
export default News;