import Navbar from "./Navbar";
import Footer from "./Footer";
import Wrapper from "../ui/Wrapper";


const Layout = ({ children }) => {
    return ( 
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
     );
}
 
export default Layout;