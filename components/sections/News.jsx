import Wrapper from '../ui/Wrapper';
import { newsOne } from '../../shareable/news';
import { newsTwo } from '../../shareable/news';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../ui/NewsCard';


const News = () => {
    return ( 
        <Wrapper>
            <div>
                <div className="grid grid-cols-2 mt-12 gap-x-12">
                    <div className="space-y-6">
                        <h1 className="text-8xl">News from TUM</h1>
                        <p className="text-xl">News, research results and events: everything that enthuses people at our university.</p>
                        <button className="px-5 py-4 text-base text-white uppercase bg-primary-300">See All</button>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {newsOne.map((news, id) => <NewsCard news={news} key={id} />)}
                    </div>
                    <div className="grid grid-cols-2 col-span-2 gap-6 w-[696px] relative left-[40%] mt-12">
                        {newsTwo.map((news, id) => <NewsCard news={news} key={id} />)}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </Wrapper>
    );
}
 
export default News;