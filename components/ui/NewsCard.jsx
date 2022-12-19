import Link from 'next/link';
import Image from 'next/image';

const NewsCard = ({news}) => {
    return ( 
        <Link href="" className="flex flex-col justify-between space-y-3 hover:text-primary-300">
            <div className="relative mb-3">
                <Image src={news.imageURL} width={330} height={200} alt="Image" />
                <span className="absolute bottom-0 left-0 bg-gray-300 px-0.5 py-2 text-secondary-200">{news.tag}</span>
            </div>
            <h5 className="text-base">{news.tagLine}</h5>
            <h3 className="text-xl font-bold">{news.title}</h3>
            <p className="text-sm">{news.description}</p>
            <div className="flex justify-between text-3.3xl">
                <span className="px-3">{news.date}</span>
                <span className="px-3">{news.readingTime}</span>
            </div>
        </Link>
     );
}
 
export default NewsCard;