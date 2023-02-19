// Next
import Image from 'next/image';
// Logo Image
import LogoImage from '../../public/Logo.png';
// Mui Components
import Box from '@mui/material/Box';
// Framer Motion Animation
import {motion} from 'framer-motion';

function LogoDesktop({styles}) {
    return (
        <Box
            component={motion.div}
            className={styles.logoDesktop}
        >
            <Box className={styles.blurEffectLogo}></Box>
            <Image
                quality={100}
                className={styles.logoDesktop}
                src={LogoImage}
                alt="Logo" />
        </Box>
    );
}

export default LogoDesktop;