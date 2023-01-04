import Wrapper from "../ui/Wrapper";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed z-50 w-full bg-primary-200">
            <Wrapper>
                <nav className="flex items-center justify-between text-white gap-x-10 md:gap-x-0">
                    <div className="flex items-center gap-x-2 pr-[20px]">
                        <img src="/gallery.svg" className="w-[33px] h-[33px] pr-1" alt="Gallery Icon"/>
                        <div className="flex py-6 gap-x-2">
                            <img src="/tum.svg" alt="Gallery Icon" className="w-[80px] h-[42px]" />
                            <p className="hidden text-xs xl:block">
                                Technical<br />
                                University<br />
                                of Munich
                            </p>
                        </div>
                    </div>  
                    <div className="flex items-center">
                        <ul className="hidden xl:flex items-center gap-x-6  mr-[54px] font-bold">
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">news and events</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">studies</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">lifelong learning</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">research</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">innovation</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">community</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary-200 hover:border-white solid">
                                <Link href="#">about tum</Link>
                            </li>
                        </ul>
                        <div className="flex -mt-[11px] gap-x-2 items-center">
                            <div className="flex items-center text-base gap-x-3 md:gap-x-2">
                                <Link href="#" className="text-gray-500">DE</Link>
                                <Link href="#" className="pl-3 border-l-4 border-white md:border-l md:pl-2 solid">EN</Link>
                            </div>
                            <div className="p-1.5 md:px-5">
                                <img src="/search.svg" className="w-[36px] h-[36px] md:w-[24px] md:h-[24px]" alt="Search Icon" />
                            </div>
                            <div className="block p-1.5 md:p-0 xl:hidden">
                                <img src="/hamburger.svg" className="w-[36px] h-[36px] md:w-[24px] md:h-[24px]" alt="Search Icon" />
                            </div>
                        </div>
                    </div>
                </nav>
            </Wrapper>
        </div> 
        
        
     );
}
 
export default Navbar;