// Next
import Image from 'next/image';
// Styles
import styles from './Carousel.module.css';
// Mui Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// Mui icons
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
// Carousel
import Carousel from 'react-material-ui-carousel'
// Others
import {motion} from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

export default function CarouselImages(props)
{
    var items = [
        {
            image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
        },
        {
            image: "https://images.unsplash.com/photo-1549997965-dbf7d99eaca5"
        },
        {
            image: "https://images.unsplash.com/photo-1599142296733-1c1f2073e6de"
        },
        {
            image: "https://images.unsplash.com/photo-1574871786514-46e1680ea587"
        },
    ]
    return (
        <Carousel
            className={styles.carousel}
            fullHeightHover={true}
            PrevIcon={<ChevronLeftRoundedIcon fontSize="large"/>}
            NextIcon={<ChevronRightRoundedIcon fontSize="large"/>}
            animation="slide"
            duration={800}
            interval={6000}
            stopAutoPlayOnHover={false}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    left: 30
                }
            }}
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    width: '7rem'
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    display: 'none',
                }
            }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box className={styles.imageContainer}>
            <Image
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
                src={props.item.image}
                alt="Carousel"
            />
            <Link
                to="dashboard"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <IconButton
                    component={motion.button}
                    animate={{y: 30, transition: {repeat: Infinity, duration: 1,repeatDelay:0}}}
                    className={styles.iconContainer}
                >
                    <KeyboardArrowDownRoundedIcon className={styles.icon}/>
                </IconButton>
            </Link>
        </Box>
    )
}