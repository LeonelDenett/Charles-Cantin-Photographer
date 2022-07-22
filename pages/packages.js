// Styles
import styles from '../styles/Packages.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Components
import Cards from '../components/Packages/Card';

function Packages() {
    return (
        <Box className={styles.container} sx={{height: {xs: 'calc(100vh - 4.5rem)', lg: 'calc(100vh - 5.5rem)', xl: 'calc(100vh - 6.5rem)'}}}>
            <Box className={styles.content}>
            <Typography variant="title">Packages</Typography>
            <Cards/>
            </Box>
        </Box>
    );
}

export default Packages;