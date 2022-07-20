// Next
import Image from 'next/image';
import { useState } from 'react';
// Styles
import styles from '../styles/Photos.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
// Icons Mui Components
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ChurchIcon from '@mui/icons-material/Church';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
// Framer Motion
import {motion} from 'framer-motion';
// Components
import Gallery from '../components/Photos/Gallery'


// const itemData = [
//     {
//       img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//       title: 'Books',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//       title: 'Sink',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//       title: 'Kitchen',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//       title: 'Blinds',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//       title: 'Chairs',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//       title: 'Laptop',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//       title: 'Doors',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//       title: 'Coffee',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//       title: 'Storage',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//       title: 'Candle',
//       width: 4,
//       height: 3
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//       title: 'Coffee table',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         title: 'Bed',
//         width: 4,
//         height: 3
//       },{
//         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         title: 'Bed',
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//         width: 4,
//         height: 3
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//         width: 4,
//         height: 3
//       },
//       {
//           img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//           title: 'Bed',
//           width: 4,
//           height: 3
//         },
//   ];


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 0px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 0px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'flex-end' : 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function Photos() {
    // Querys
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(!open);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const ids = [1,2,3,4,]
    const icons = [
        <ChurchIcon fontSize={open ? "large" : ""} className={styles.drawerIcons}/>,
        <FavoriteIcon fontSize={open ? "large" : ""} className={styles.drawerIcons}/>,
        <PregnantWomanIcon fontSize={open ? "large" : ""} className={styles.drawerIcons}/>,
        <ChildFriendlyIcon fontSize={open ? "large" : ""} className={styles.drawerIcons}/>,
    ]
    const titles = ['Weeding', 'Couple', 'Pregnant','Baby', ]

    var items = ids.map((id, index) => {
        return {
          id: ids[index],
          title: titles[index],
          icon: icons[index],
        }
    });

    // Styles
    const paperStyle = {
        transition: 'all 0.5s',
        justifyContent: 'center',
        marginLeft: '0.4rem',
        width: open ? '' : '2.2rem',
        zIndex: 1,
        height: open ? "23rem" : "20rem",
        border: 'none',
        borderRadius: '1.5rem',
        marginTop: '15.25rem',
        backgroundColor: '#393737',
        boxShadow: open ? 'inset 0px 0px 2px 2px white' : '',
    }
    const iconStyle = {
        boxShadow: open ? '0px 0px 5px 1px #FEFBE7' : '',
        transition: 'all 0.5s',
    }
    const listStyle = {
        transition: 'all 0.5s',
        justifyContent: open ? 'initial' : 'center',
    }
    const listIconsStyle = {
        mr: open ? 2 : 'auto',
        justifyContent: 'center',
        transition: 'all 0.3s',
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.content}>
                {/* Title */}
                <Typography component="h1" variant="title">Photos</Typography>
                <Divider/>
                {/* Drawer Photos */}
                <Box className={styles.drawerContainer}>
                    
                    

                    <Gallery styles={styles}/>

                    {/* <Box className={styles.gridPhotos} style={{margin:0}}>
                    <ImageList
                    sx={{ width: '100%', height: '100%' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={300}
                    >
                    {itemData.map((item) => (
                        <ImageListItem whileTap={{scale: 0.7}} component={motion.li} key={item.img} cols={matchDownMd ? 4 : item.cols || 1} rows={item.rows || 1}>
                        <Image
                            layout="fill"
                            {...srcset(300, item.rows, item.cols)}
                            src={item.img}
                            alt={item.title}
                            quality={100}
                            objectFit="fill"
                            priority
                            className={styles.photos}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Photos;