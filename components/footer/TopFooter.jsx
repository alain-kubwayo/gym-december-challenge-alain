import Image from "next/image";
import Link from "next/link";

const TopFooter = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 pt-[56px] pb-[60px]  border-b border-secondary-300">
            <div className="flex">
                <div className="pt-[5px] pr-[16px]">
                    <Image width={54} height={25} src="/tum-logo.svg" alt="Logo" className="h-fit" />
                </div>
                <div>
                    <div>
                        <p>Tehnical University of Munich</p>
                        <p>Arcisstraße 21</p>
                        <p>80333 München</p>
                    </div>
                    <div className="mt-5">
                    <p>Phone: <Link href="#" className="hover:underline">+49 (0)89-289-01</Link></p>
                    <p>Fax: <Link href="#" className="hover:underline">+49 (0)89-289-01</Link></p>
                    </div>
                </div>
            </div>

            <div>
                <h6 className="font-bold">Let&apos;s shape the future together.</h6>
                <Link href="#" className="flex mt-3 gap-x-3">
                    <span className="hover:underline">Support us</span>
                    <Image src="/pen.svg" height={20} width={20} alt="Icon" />
                </Link>
            </div>

            <div>
                <h6 className="font-bold">Latest news</h6>
                <ul className="mt-3 space-y-4">
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/arrow.svg" alt="Icon" />
                        <Link href="#">Germany&apos;s strongest university in business sciences</Link>
                    </li>
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/arrow.svg" alt="Icon" />
                        <Link href="#">TUM partners with Nobel Sustainability Trust</Link>
                    </li>
                    <li className="flex gap-x-3">
                        <Image height={20} width={20} src="/arrow.svg" alt="Icon" />
                        <Link href="#">Antihelium nuclei as messengers from the depths of the galaxy</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default TopFooter;