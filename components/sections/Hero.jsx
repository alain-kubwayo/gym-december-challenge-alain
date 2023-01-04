import Wrapper from "../ui/Wrapper";

const Hero = () => {
    return ( 
        <>
        <div className="flex mb-8 mt:mb-0 pt-36 md:pt-0 flex-col md:block md:h-[48.75rem] relative w-full">
            <video className="hidden md:block md:top-0 md:object-cover md:w-full md:h-full md:absolute" autoplay="autoplay" muted loop>
                <source src="/hero-video.mp4" type="video/mp4"/>
            </video>
            <video className="md:hidden" autoplay="autoplay" muted loop>
                <source src="/hero-video.mp4" type="video/mp4"/>
            </video>
            <div className="bg-[#163F6F] md:bg-transparent py-16">
                <Wrapper>
                    <div className="md:absolute order-1 md:order-none md:top-[20%] md:z-40 text-white md:grid md:grid-cols-2">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold">TUM. The Entrepreneurial University</h1>
                            <p className="text-xl">Innovation through talent, excellence and responsibility</p>
                        </div>
                        <div></div>
                    </div>
                </Wrapper>
            </div>
        </div>
        </>
     );
}
 
export default Hero;


