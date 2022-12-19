import moreDetails from "../../shareable/more";
import MoreCard from "../ui/MoreCard";
import Wrapper from "../ui/Wrapper";
import Link from "next/link";
import Image from "next/image";

const More = () => {
    return ( 
        <Wrapper>
            <div className="grid grid-cols-3 gap-x-[9rem] mb-[2.5rem] mt-24">
                <Link href="" className="flex flex-col justify-between col-span-2 space-y-3 text-black hover:text-primary-300">
                    <div>
                        <Image src="/more-img-1.jpeg" width={880} height={256} alt="Image" className="h-[256px]" />
                    </div>
                    <h3 className="text-2xl font-bold">We are TUM – the podcast of our university</h3>
                    <p className="text-sm leading-[1.625]">In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the &quot;hidden champions&quot; behind the scenes.</p>
                    <button className="px-4 py-5 mt-6 border w-fit border-primary-300 text-primary-300">All episodes</button>
                </Link>
                <Link href="" className="flex flex-col justify-between space-y-3 text-black hover:text-primary-300">
                    <div>
                        <Image src="/more-img-2.jpeg" width={368} height={256} alt="Image" className="h-[256px]" />
                    </div>
                    <h3 className="text-2xl font-bold">Lifelong learning</h3>
                    <p className="text-sm leading-[1.625]">We offer continuing education opportunities accompanying you over your whole career.</p>
                    <button className="px-4 py-5 mt-6 border w-fit border-primary-300 text-primary-300">TUM Institute for LifeLong Learning</button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-x-[9rem] gap-y-[2.5rem]">
                {moreDetails.map((detail, id) => <MoreCard detail={detail} key={id} />)}
            </div>
        </Wrapper>
     );
}
 
export default More;