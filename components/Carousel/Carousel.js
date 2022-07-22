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

export default function CarouselImages(props)
{
    var items = [
        {
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b"
        },
        {
            description: "Hello World!",
            image: "https://images.unsplash.com/photo-1597861405049-0b011428568f"
        },
        {
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.unsplash.com/photo-1606495186270-395860907235"
        },
        {
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914"
        },
        {
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.unsplash.com/photo-1505428215601-90f0007b9e83"
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
                alt="Carousel"
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