// Next
import Link from 'next/link';
import {useRouter} from 'next/router'
// Styles
import styles from './Navbar.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Components
import DrawerMobile from '../Drawer/Drawer';
import LogoMobile from '../Logo/LogoMobile';
import LogoDesktop from '../Logo/LogoDesktop';

function Navbar() {
    const router = useRouter();
    return (
        <Box className={styles.navbar}>
            {/* Drawer */}
            <Box sx={{display: {md: 'none'}}}>
                <DrawerMobile/>
            </Box>
            {/* Logo Mobile*/}
            <Box sx={{display: {md: 'none'}}}>
                <LogoMobile styles={styles}/>
            </Box>
            {/* Logo Desktop*/}
            <Box className={styles.navbarDesktop}>
                <Box className={styles.blurEffect}></Box>
                <Link href="/"><Typography variant="link" className={styles.link}>Home</Typography></Link>
                <Link href="/photos"><Typography variant="link" className={styles.link}>Photos</Typography></Link>
                <LogoDesktop styles={styles}/>
                <Link href="/packages"><Typography variant="link" className={styles.link}>Packages</Typography></Link>
                <Link href="/contact"><Typography variant="link" className={styles.link}>Contact</Typography></Link>
            </Box>
        </Box>
    );
}

export default Navbar;