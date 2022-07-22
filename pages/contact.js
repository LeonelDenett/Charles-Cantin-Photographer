// Next
import Link from 'next/link';
// Styles
import styles from '../styles/Contact.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Icons Mui Components
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
// Framer Motion
import FormContainer from '../components/Form/Form';

function Contact() {
    return (
        <Box className={styles.container} sx={{height: {xs: 'calc(100vh - 4.5rem)', lg: 'calc(100vh - 5.5rem)', xl: 'calc(100vh - 6.5rem)'}}}>
            <Box className={styles.content}>
                {/* Title */}
                <Typography component="h1" variant="title">Contact</Typography>
                {/* Information */}
                <Box className={styles.socialContainer}>
                    <Typography component="h2" variant="subtitleSocial">For all enquiries & bookings please fill out the contact form below or email us at charlescantin@gmail.com</Typography>
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
                        <Typography variant="social">+33 7 66666666</Typography>
                    </Box>
                    <Box className={styles.social}>
                        <AlternateEmailIcon color="brownDark"/>
                        <Typography variant="social">charlescantin@gmail.com</Typography>
                    </Box>
                </Box>
                {/* Form */}
                <Box>
                    <FormContainer styles={styles}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;