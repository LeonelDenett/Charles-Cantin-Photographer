// Next
import Link from 'next/link';
// Styles
import styles from '../styles/Contact.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
// Icons Mui Components
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
// Framer Motion
import {motion} from 'framer-motion';
import Input from '../components/Form/Input';

// sx={{height: {xs: 'calc(100vh - 5.5rem)', sm: 'calc(100vh - 6rem)', lg: 'calc(100vh - 5.5rem)'}}}
// sx={{paddingX: {sm: '5rem', lg: '10rem', xl: '20rem'}, paddingTop: {xs: '4.5rem', sm: '5rem', md: '5.5rem'}}}


// sx={{marginX: {sm: '5rem', lg: '10rem', xl: '20rem'},paddingTop: {xs: '10rem', md: '10.5rem', xl: '11rem'}}}

function Contact() {
    return (
        <Box className={styles.container} sx={{height: {xs: 'calc(100vh - 4.5rem)', lg: 'calc(100vh - 5.5rem)', xl: 'calc(100vh - 6.5rem)'}}}>
            <Box className={styles.content}>
                {/* Title */}
                <Typography component="h1" variant="title">Contact</Typography>
                {/* Information */}
                <Box className={styles.socialContainer}>
                    <Typography component="h2" variant="subtitle">For all enquiries & bookings please fill out the contact form below or email us at charles-cantin@gmail.com</Typography>
                    <Box className={styles.social}>
                        <Link href="https://www.instagram.com/charlescantinphotographer">
                            <IconButton className={styles.iconContainer}>
                                <InstagramIcon fontSize='large' color="brownDark"/>
                            </IconButton>
                        </Link>
                        <Link href="https://es-la.facebook.com/">
                            <IconButton className={styles.iconContainer}>
                                <FacebookIcon fontSize='large' color="brownDark"/>
                            </IconButton>
                        </Link>
                    </Box>
                    <Box className={styles.social}>
                        <PhoneIcon color="brownDark"/>
                        <Typography>+33 7 66666666</Typography>
                    </Box>
                    <Box className={styles.social}>
                        <AlternateEmailIcon color="brownDark"/>
                        <Typography>charlescantin@gmail.com</Typography>
                    </Box>
                </Box>
                {/* Form */}
                <Box className={styles.formContainer}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={12}>
                                            <Input styles={styles}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Input styles={styles}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Input styles={styles}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input styles={styles}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;