import TopFooter from "../../components/footer/TopFooter";
import Wrapper from "../ui/Wrapper";
import MiddleFooter from "../../components/footer/MiddleFooter";
import BottomFooter from "../../components/footer/BottomFooter";

const Footer = () => {
    return ( 
        <footer className="mt-12 text-base text-white bg-primary-400">
            <Wrapper>
                <TopFooter />
                <MiddleFooter />
            </Wrapper>
            <BottomFooter />
        </footer>
     );
}
 
export default Footer;