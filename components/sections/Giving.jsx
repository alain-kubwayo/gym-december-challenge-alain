import Wrapper from "../ui/Wrapper";

const Giving = () => {
    return ( 
        <Wrapper>
            <div className="flex flex-col justify-center px-3 py-10 mt-24 text-center bg-tertiary-500">
                <h2 className="font-bold text-7xl">Giving</h2>
                <p className="mt-5 text-base">Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.</p>
                <button className="self-center px-5 py-4 mt-6 text-base text-white uppercase w-fit bg-primary-300">Support Us</button>
            </div>
        </Wrapper>
    );
}
 
export default Giving;