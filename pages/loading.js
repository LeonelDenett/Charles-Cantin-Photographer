// Styles
import styles from "../styles/Loading.module.css"
import {AnimatePresence, motion} from "framer-motion"
import { VisibilityRounded } from "@mui/icons-material";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
// Framer Variants
import { zoomingIn, fade } from "../components/FramerVariants/Variants";

function Loading() {
    const [visible, setVisible] = useState(false)
    const changeColor = () => {
        setVisible(!visible)
    }
    return (
        <Box
            component={motion.div}
            key="loading"
            variants={fade}
            initial="start"
            animate="animate"
            exit="exit"
            
            className={styles.dashboard}
        >
            <Box
                display={"flex"}
                component={motion.div}
                variants={zoomingIn}
                initial="start"
                animate="animate"
                exit="exit"
            >
                <Typography color={"#232222"} mr={4} variant="h3">Loading</Typography>
                <span className={styles.loader}></span>
            </Box>
        </Box>
    );
}

export default Loading;