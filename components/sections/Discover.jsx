import Image from "next/image";
import Button from "../ui/Button";
import Wrapper from "../ui/Wrapper";


const Discover = () => {
    return ( 
        <Wrapper>
            <section className="relative mt-12">
                <h4 className="text-base font-bold">Customized navigation</h4>
                <h2 className="font-bold text-8xl mt-0.5 mb-12">Discover what TUM has to offer</h2>
                <div className="flex flex-col w-full md:w-74.25 px-2 pb-2 border md:absolute bg-white mt-8">
                    <span className="px-5 py-3">For:</span>
                    <button className="px-5 py-3 font-semibold text-left text-primary-200 bg-secondary-100">Prospective Students</button>
                    <button className="px-5 py-3 text-left text-primary-300">Founders</button>
                    <button className="px-5 py-3 text-left text-primary-300">Employees</button>
                    <hr className="mt-2" />
                    <button className="px-5 py-3 text-left text-primary-300">Show all</button>
                </div>
                <div className="flex md:gap-x-[3.5rem] justify-end">
                    <div className="hidden md:block">
                        <Image src="/discover.webp" height={445.79} width={688} alt="Image" />
                    </div>
                    <div className="md:my-auto w-full md:w-[419px] md:space-y-[1.5rem]">
                        <h2 className="text-secondary-200 text-10.5xl font-bold">Prospective Students</h2>
                        <p className="text-xl">
                            Learn to bring ideas to life, discover new possibilities, work in teams and build networks.
                        </p>
                        <Button style="text-primary-300 border-primary-300 border md:mt-0 mt-4" description="Learn more" />
                    </div>
                </div>
            </section>
        </Wrapper>
     );
}
 
export default Discover;