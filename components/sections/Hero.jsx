import Wrapper from "../ui/Wrapper";

const Hero = () => {
    return ( 
        <>
        <div className="flex flex-col md:block md:h-[48.75rem] md:relative bg-red-500 w-full">
            <video className="hidden md:block md:top-0 md:object-cover md:w-full md:h-full md:absolute" autoplay="autoplay" muted loop>
                <source src="/hero-video.mp4" type="video/mp4"/>
            </video>
            <Wrapper>
                <video className="md:hidden" autoplay="autoplay" muted loop>
                    <source src="/hero-video.mp4" type="video/mp4"/>
                </video>
                <div className="md:absolute order-1 md:order-none md:top-[20%] md:z-40 bg-primary-300 md:bg-transparent text-white md:grid md:grid-cols-2">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">TUM. The Entrepreneurial University</h1>
                        <p className="text-xl">Innovation through talent, excellence and responsibility</p>
                    </div>
                    <div></div>
                </div>
            </Wrapper>
        </div>
        </>
     );
}
 
export default Hero;


