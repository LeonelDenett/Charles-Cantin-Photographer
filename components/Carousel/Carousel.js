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
import Marriage1 from '../../galerie/marriage.jpg';
import Marriage2 from '../../galerie/marriage2.jpg';
import Marriage3 from '../../galerie/marriage3.jpg';
// Others
import {motion} from 'framer-motion';

export default function CarouselImages(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: Marriage1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: Marriage2
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            image: Marriage3
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            image: Marriage3
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            image: Marriage3
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
            />
            <IconButton
                component={motion.button}
                animate={{y: 20, transition: {repeat: Infinity, duration: 1,repeatDelay:0}}}
                className={styles.iconContainer}>
                <KeyboardArrowDownRoundedIcon className={styles.icon}/>
            </IconButton>
        </Box>
    )
}