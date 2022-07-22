// Mui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Framer Motion
import {motion} from 'framer-motion';
// Components
import Icons from './Icons';
import Links from './Links';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        zIndex: 90,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        zIndex: 90,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FEFBE7", "#FEFBE7", "#C2986E", "#C2986E"];
const titles = ["Home", "Photos", "Packages", "Contact"]
const urls = ['', "photos", "packages", "contact"]

function MenuItem({ i,styles, toggle }) {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <Box component={motion.div}>
            <motion.a
                className={styles.li}
                variants={variants}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
            >
                <Box className={styles.iconPlaceholder} style={style} >
                    <Icons i={i} styles={styles} color={colors[i]} key={i} />
                </Box>
                <Button onClick={toggle} className={styles.textPlaceholder} style={style} >
                    <Links styles={styles} title={titles[i]} url={"/" + urls[i]} color={colors[i]} key={i} />
                </Button>
            </motion.a>
        </Box>
    )
};
export default MenuItem;