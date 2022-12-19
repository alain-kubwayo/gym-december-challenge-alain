import Wrapper from "../ui/Wrapper";
import Image from "next/image";
import Button from "../ui/Button";

const Alumni = () => {
    return ( 
        <Wrapper>
            <div className="relative flex justify-end mt-24"> 
                <Image src="/alumni.webp" width={780} height={487.5} alt="President" />
                <div className="w-[684px] h-fit bg-tertiary-400 p-10 absolute left-0 top-[20%]">
                    <h3 className="text-7xl leading-[1.2] font-semibold">&quot;Here I have met a lot of people who are breaking new ground&quot;</h3>
                    <p className="mt-8 text-base">Philip Häusser, alumnus</p>
                    <Button style="bg-primary-300 uppercase hover:bg-primary-300 text-white mt-8" description="Read the Alumni Story" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Alumni;