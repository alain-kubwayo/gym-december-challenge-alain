import Wrapper from "../ui/Wrapper";
import Button from "../ui/Button";
import Image from "next/image";

const Schools = () => {
    return ( 
        <Wrapper>
            <div className="relative flex mt-24"> 
                <Image src="/schools.jpeg" width={780} height={479.188} alt="President" />
                <div className="w-[684px] h-fit bg-tertiary-300 p-10 absolute right-0 top-[20%]">
                    <h2 className="text-7xl leading-[1.2] font-semibold">Schools and Research Centers</h2>
                    <p className="mt-8 text-base">They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation.</p>
                    <Button style="bg-primary-300/70 uppercase hover:bg-primary-300 text-white mt-8" description="Organization" />
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Schools;