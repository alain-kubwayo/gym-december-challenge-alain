import Image from "next/image";
import Wrapper from "../ui/Wrapper";

const BotttomFooter = () => {
    return ( 
        <div className="py-6 bg-primary-200">
            <Wrapper>
            <div className="flex justify-between">
                <ul className="flex gap-[1.25rem]">
                    <li className="hover:underline">Jobs</li>
                    <li className="hover:underline">Feedback</li>
                    <li className="hover:underline">Press and Media</li>
                    <li className="hover:underline">Accessibility</li>
                    <li className="hover:underline">Privacy Policy</li>
                    <li className="hover:underline">Legal Notice</li>
                </ul>
                <ul className="flex gap-[1.5rem]">
                    <Image width={20} height={20} src="/facebook.svg" alt="Social" />
                    <Image width={20} height={20} src="/instagram.svg" alt="Social" />
                    <Image width={20} height={20} src="/twitter.svg" alt="Social" />
                    <Image width={20} height={20} src="/linkedin.svg" alt="Social" />
                    <Image width={20} height={20} src="/youtube.svg" alt="Social" />
                    <Image width={20} height={20} src="/rss.svg" alt="Social" />
                </ul>
            </div>
            <div className="flex items-center pt-6 space-x-3">
                <div className="pr-3">
                    <Image src="/partners-of-excellence.svg" width={32} height={60} alt="Logo"  />
                </div>
                <div className="hover:underline">
                    <p>TUM Partners of Excellence</p>
                    <p className="pt-6 text-xs">Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft · Volkswagen · Wacker Chemie</p>
                </div>
            </div>
            </Wrapper>
        </div>
     );
}
 
export default BotttomFooter;