// Next
import {useRouter} from 'next/router'
// Styles
import styles from './Footer.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    const router = useRouter();
    return (
        <Box className={styles.footer} sx={{marginTop: {xs: router.pathname == '/' ? 1 : 2, sm: 2, lg: 3}}}>
            <Typography variant="footer">Copyrights © Leonel Denett | All rights Reserved </Typography>
        </Box>
    );
}

export default Footer;