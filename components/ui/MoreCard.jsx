import Link from "next/link";
import Image from "next/image";

const MoreCard = ({detail}) => {
    return ( 
        <Link href="" className="flex flex-col justify-between space-y-3 text-black hover:text-primary-300">
            <div>
                <Image src={detail.imageURL} width={368} height={256} alt="Image" className="h-[256px]" />
            </div>
            <h3 className="text-2xl font-bold">{detail.title}</h3>
            <p className="text-sm leading-[1.625]">{detail.description}</p>
            <button className="px-4 py-5 mt-6 border w-fit border-primary-300 text-primary-300">{detail.buttonText}</button>
        </Link>
     );
}
 
export default MoreCard;