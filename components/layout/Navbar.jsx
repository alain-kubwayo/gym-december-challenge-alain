import Wrapper from "../ui/Wrapper";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed z-50 w-full bg-primary-200">
            <Wrapper>
                <nav className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-x-2">
                        <img src="/gallery.svg" className="md:w-[33px] md:h-[33px]w-[66px] h-[66px] pr-2.5" alt="Gallery Icon"/>
                        <div className="flex py-8 gap-x-2">
                            <img src="/tum.svg" alt="Gallery Icon" className="w-[160px] h-[84px] md:w-[80px] md:h-[42px]" />
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
                        <div className="flex -mt-[11px] gap-x-6 md:gap-x-2 items-center">
                            <div className="flex items-center text-4xl md:text-base gap-x-3 md:gap-x-2">
                                <Link href="#" className="text-gray-500">DE</Link>
                                <Link href="#" className="pl-3 pr-2 border-l-4 border-white md:border-l md:pl-2 solid">EN</Link>
                            </div>
                            <div className="p-2.5 md:px-5">
                                <img src="/search.svg" className="w-[48px] h-[48px] md:w-[24px] md:h-[24px]" alt="Search Icon" />
                            </div>
                            <div className="p-2.5 md:p-0 block xl:hidden">
                                <img src="/hamburger.svg" className="w-[48px] h-[48px] md:w-[24px] md:h-[24px]" alt="Search Icon" />
                            </div>
                        </div>
                    </div>
                </nav>
            </Wrapper>
        </div> 
        
        
     );
}
 
export default Navbar;