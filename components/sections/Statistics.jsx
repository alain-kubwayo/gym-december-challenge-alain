import Wrapper from "../ui/Wrapper";

const Statistics = () => {
    return ( 
        <Wrapper>
            <h2 className="mt-12 font-bold text-8xl">TUM in numbers</h2>
            <div className="grid grid-cols-1 grid-rows-2 mt-12 gap-x-0 gap-y-6 md:gap-6 md:grid-cols-5">
                <div className="md:col-span-3 row-span-2 p-10 bg-primary-300 leading-[.7647058824]">
                    <p className="text-[80px] md:text-32.5xl text-white font-extrabold">50,000</p>
                    <p className="text-[20px] md:text-8.5xl text-white text-center md:text-left font-bold mt-5">Students</p>
                </div>
                <div className="grid items-end grid-cols-1 col-span-2 row-span-1 p-5 text-center md:text-left md:grid-cols-2 bg-tertiary-100">
                    <span className="text-[90px] md:text-22.5xl font-extrabold leading-[.7647058824]">176</span>
                    <span className="text-5.5xl font-bold">ERC Grants for cutting-edge research</span>
                </div>
                <div className="grid items-end grid-cols-1 col-span-2 row-span-1 p-5 text-center md:text-left md:grid-cols-2 bg-tertiary-200">
                    <span className="text-22.5xl font-extrabold leading-[.7647058824]">18</span>
                    <span className="text-5.5xl font-bold">Nobel laureates</span>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Statistics;