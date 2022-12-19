import Image from "next/image";
import Wrapper from "../ui/Wrapper";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-primary">
            <Wrapper>
                <nav className="flex items-center justify-between text-white">
                    <div className="flex gap-x-2">
                        <Image src="/gallery.svg" width={33} height={33} alt="Gallery Icon" />
                        <div className="flex py-5 gap-x-2">
                            <Image src="/tum.svg" width={80} height={42} alt="Gallery Icon" className="pl-1.5" />
                            <p className="text-xs">
                                Technical<br />
                                University<br />
                                of Munich
                            </p>
                        </div>
                        
                    </div>  
                    <div className="flex items-center">
                        <ul className="flex items-center gap-x-6  mr-[54px] font-bold">
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">news and events</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">studies</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">lifelong learning</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">research</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">innovation</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">community</Link>
                            </li>
                            <li className="pt-6 pb-8 text-sm uppercase border-b-4 border-primary hover:border-white solid">
                                <Link href="#">about tum</Link>
                            </li>
                        </ul>
                        <div className="flex -mt-[11px] gap-x-2">
                            <div className="flex gap-x-2">
                                <Link href="#" className="text-gray-500">DE</Link>
                                <Link href="#" className="pl-2 border-l border-white solid">EN</Link>
                            </div>
                            <div className="px-5">
                                <Image src="/search.svg" width={24} height={24} alt="Search Icon" />
                            </div>
                        </div>
                    </div>
                </nav>
            </Wrapper>
        </div> 
        
        
     );
}
 
export default Navbar;