// Next
import {useRouter} from 'next/router';
import Link from 'next/link'
// Styles
import styles from './Footer.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    const router = useRouter();
    return (
        <Box className={styles.footer} sx={{marginTop: {xs: router.pathname == '/' ? 1 : 2, sm: 2, lg: 3}}}>
            <Link href={"https://d-studio.vercel.app/"} style={{textDecoration:"none", cursor:"pointer", color:"inherit"}} target="_blank">
                <Typography variant="footer" sx={{cursor:"pointer"}}>Copyrights © D STUDIO | All rights Reserved </Typography>
            </Link>
        </Box>
    );
}

export default Footer;