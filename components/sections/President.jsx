import Wrapper from "../ui/Wrapper";
import Image from "next/image";
import Button from "../ui/Button";

const President = () => {
    return ( 
        <Wrapper>
            <div className="relative flex mt-12"> 
                <Image src="/president.webp" width={780} height={479.188} alt="President" />
                <div className="w-[684px] h-fit bg-primary-100 p-10 text-white absolute right-0 top-[12%]">
                    <h2 className="text-7xl leading-[1.2] font-semibold">What drives us: President Thomas F. Hofmann about TUM</h2>
                    <p className="mt-8 text-base">Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.</p>
                    <Button style="bg-white text-primary-300 uppercase hover:bg-primary-300 hover:text-white mt-8" description="Read More" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default President;