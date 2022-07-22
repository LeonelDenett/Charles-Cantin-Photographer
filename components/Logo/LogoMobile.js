import Image from 'next/image';
import LogoImage from '../../galerie/Logo.png'
import Box from '@mui/material/Box';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LogoMobile({styles}) {
    const router = useRouter();
    return (
        <Box
            component={motion.div}
            className={router.pathname == "/" ? styles.logoContainerHome : styles.logoContainer}
        >
            <Image
                layout='fill'
                objectFit="cover"
                quality={100}
                className={styles.logo}
                src={LogoImage}
                alt="Logo"/>
        </Box>
    );
}

export default LogoMobile;