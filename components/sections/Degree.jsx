import Link from "next/link";
import Wrapper from "../ui/Wrapper";
import Image from "next/image";

const Degree = () => {
    return ( 
        <div className="mt-12">
            <Wrapper>
            <select className="w-full px-0 py-5 pl-5 text-2xl font-bold border-b outline-none border-primary-200 text-primary-200/50 bg-secondary-100">
                <option value="" className="text-xl fontld md:w-full">Select degree program or enter keyword</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Master of Science (M.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
                <option value="" className="w-full bg-blue-700">Chemical Biotechnology - Bachelor of Science (B.Sc.)</option>
            </select>
            <Link href="#" className="flex items-center justify-end mt-5 text-base font-semibold text-primary-300">
                <span className="hover:underline">Degree programs</span>
                <Image src="/arrow-right.svg" width={24} height={31.5} alt="Arrow" className="ml-1" />
            </Link>
        </Wrapper>
        </div>
    );
}
 
export default Degree;