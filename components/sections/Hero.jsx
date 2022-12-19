import Wrapper from "../ui/Wrapper";

const Hero = () => {
    return ( 
        <>
        <div className="hidden xl:block h-[48.75rem] relative">
            <video className="top-0 object-cover w-full h-full xl:absolute" autoplay="autoplay" muted loop>
                <source src="/hero-video.mp4" type="video/mp4"/>
            </video>
            <Wrapper>
                <div className="absolute xl:top-[20%] z-40 text-white grid grid-cols-2">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold">TUM. The Entrepreneurial University</h1>
                        <p className="text-xl">Innovation through talent, excellence and responsibility</p>
                    </div>
                </div>
            </Wrapper>
        </div>
        </>
     );
}
 
export default Hero;


