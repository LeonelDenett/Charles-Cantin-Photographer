// Framer Motion Animation
import {motion} from 'framer-motion';
// Components
import MenuItem from './MenuItem';

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const itemIds = [0, 1, 2, 3];

function Navigation({styles, toggle, isOpen}) {
    return(
    <motion.div className={styles.menuContainer} variants={variants}
    initial={{x:-300}} animate={isOpen? {x:0} : {x:-300, transition: {delay: 1}}}
    >
      {itemIds.map(i => (
        <MenuItem toggle={toggle} styles={styles} i={i} key={i} />
      ))}
    </motion.div>
  );
}
export default Navigation;
