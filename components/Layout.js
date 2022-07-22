// Mui Components
import Box from '@mui/material/Box';
// Components
import Head from './Head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({children}) => {
    return (
        <Box className="container">
            <Head/>
            <Navbar/>
            <Box className="content">
            {children}
            </Box>
            <Footer/>
        </Box>
    )
}

export default Layout;