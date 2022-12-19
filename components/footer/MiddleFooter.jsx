import Image from "next/image";

const MiddleFooter = () => {
    return ( 
        <div className="py-8 space-y-4">
            <div className="flex">
                <h6>Schools and Departments:</h6>
                <ul className="flex flex-wrap w-full gap-x-3">
                    <li className="flex hover:underline">
                        <span>Computation, Information and Technology</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span className="w-full">Engineering and Design</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Natural Sciences</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Life Sciences</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Management</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Social Sciences and Technology </span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Medicine</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Sport and Health Sciences </span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                </ul>
            </div>
            <div className="flex">
                <h6 className="pr-20">Quicklinks:</h6>
                <ul className="flex flex-wrap w-full gap-x-3">
                    <li className="flex hover:underline">
                        <span>Persons (TUMonline) </span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span className="w-full">IT Services</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Calendar</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>MyTUM</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>Rooms (TUMonline)</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>University Library</span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                    <li className="flex hover:underline">
                        <span>TUMshop </span>
                        <Image src="/pen.svg" width={14} height={14} alt="Edit" className="ml-1" />
                    </li>
                </ul>
            </div>
        </div>
     )
}
 
export default MiddleFooter;


