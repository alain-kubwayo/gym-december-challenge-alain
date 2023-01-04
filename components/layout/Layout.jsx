import Navbar from "./Navbar";
import Footer from "../sections/Footer";


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