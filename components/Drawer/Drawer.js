import { motion,useCycle } from "framer-motion";
import styles from './Drawer.module.css';
import Box from '@mui/material/Box';
// Components
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
    open: (height = 240) => ({
        clipPath: `circle(${height * 2 + 200}px at 60px 60px)`,
        transition: {
            type: "spring",
            stiffness: 30,
        }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
};

function DrawerMobile() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const url = 'url(https://images.unsplash.com/photo-1657028814638-bf738a9d40c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)'

    return (
        <Box>
            <motion.nav
                className={styles.nav}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.div className={styles.background} style={isOpen ? {top: '-2.5rem',backgroundImage: url} : {top: '0rem'}} variants={sidebar} />
                <Navigation isOpen={isOpen} toggle={() => toggleOpen()} styles={styles} />
                <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} styles={styles} />
            </motion.nav>
        </Box>
    );
};
export default DrawerMobile;
