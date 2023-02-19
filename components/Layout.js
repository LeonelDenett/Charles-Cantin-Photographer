import {useState, useEffect} from "react"
// Mui Components
import Box from '@mui/material/Box';
// Components
import Head from './Head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Framer Motion Variants
import { fade } from "./FramerVariants/Variants";
// Loader
import Loading from "../pages/loading";

const Layout = ({children}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(() => setLoading(false), 3000);
    })
    return (
        <AnimatePresence>
        <Box className="container">
            <Head/>
            {loading ?
                <Loading/>
                :
                <Box
                    component={motion.div}
                    key="dashboard"
                    variants={fade}
                    initial="start"
                    animate="animate"
                    exit="exit"
                >
                <Navbar/>
                    <Box className="content">
                    {children}
                    </Box>
                <Footer/>
                </Box>
            }
        </Box>
        </AnimatePresence>
    )
}

export default Layout;