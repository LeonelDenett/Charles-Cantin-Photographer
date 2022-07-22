// Styles
import styles from '../styles/Photos.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// Components
import Gallery from '../components/Photos/Gallery'

function Photos() {
    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                {/* Title */}
                <Typography component="h1" variant="title">Photos</Typography>
                <Divider/>
                {/* Drawer Photos */}
                <Box className={styles.drawerContainer}>
                    <Gallery styles={styles}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Photos;