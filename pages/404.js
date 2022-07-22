// Next
import Link from 'next/link';
// Styles
import styles from '../styles/404.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NotFound() {
    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                <Typography component="h1" variant="title">Oups...</Typography>
                <Typography component="h2" variant="title">That page cannot be found.</Typography>
                <Typography variant="description" >Go back to the</Typography>
                <Link href="/"><Typography variant="description" className={styles.link}>Homepage</Typography></Link>
            </Box>
        </Box>
    );
}

export default NotFound;