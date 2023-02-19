// Next
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from "react";
// Styles
import styles from '../styles/Home.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// Icons Mui Components
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
// Components
import CarouselImages from '../components/Carousel/Carousel';
// Framer Motion
import {AnimatePresence, motion} from "framer-motion";
import Loading from './loading';
// Variants Framer Motion
import { fade } from '../components/FramerVariants/Variants';

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(() => setLoading(false), 3000);
    })
    return (
        <AnimatePresence>
            <Box component={motion.div} className={styles.container}>
            {/* Carousel */}
            <Box>
                <CarouselImages />
            </Box>
            {/* Content */}
            <Box component={motion.div} key="dashboard" id="dashboard" className={styles.content} sx={{marginX: {lg: '10rem'}}}>
                <Typography component="h1" variant="title">Charles Cantin Studio</Typography>
                <Typography variant="description">It's the story of... in fact, it's your story that I immortalize: marriage, pregnancy,
                    baptism; alone, as a couple or as a family. My main concern is to respond as precisely and in image quality to the request
                    of my customers. I also make it a point of honor to respect the time constraints!
                </Typography>
                <Divider className={styles.divider} />
                <Grid container rowSpacing={{xs:1, sm:2, md:3}} columnSpacing={{xs:1, sm:2, md:3}}>
                    {/* Packages */}
                    <Grid item xs={12} lg={6}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Box className={styles.gridPackages} sx={{paddingX: {md: '1rem', lg: '2rem'}}}>
                                    <Typography component="h2" variant="subtitle">Discovery our Packages</Typography>
                                    <Typography variant="infos">We offer you differents options, discover the one that suits you!</Typography>
                                    <Link href="/packages">
                                    <Button
                                        variant="contained"
                                        className={styles.button}
                                        endIcon={<ArrowRightAltIcon className={styles.iconRight}/>}
                                    >
                                        Discover
                                    </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className={styles.gridPackagesImage}>
                                    <Box style={{position: 'relative', width: '100%', height: '100%'}}>
                                        <Box className={styles.photoEffect}></Box>
                                        <Image alt="PackagesImage"  layout="fill" objectFit="cover"  loading="lazy" src="https://images.unsplash.com/photo-1593106584374-89259e7efb8b" />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Portfolio */}
                    <Grid item xs={12} lg={6}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Box className={styles.gridPortfolioImage}>
                                    <Box style={{position: 'relative', width: '100%', height: '100%'}}>
                                        <Box className={styles.photoEffect}></Box>
                                        <Image alt="PortfolioImage" layout="fill" objectFit="cover" loading="lazy" src="https://images.unsplash.com/photo-1603574670812-d24560880210" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className={styles.gridPortfolio} sx={{paddingX: {md: '1rem', lg: '2rem'}}}>
                                    <Typography component="h2" variant="subtitle">Let's check our Galery</Typography>
                                    <Typography variant="infos">Take a look at our productions!</Typography>
                                    <Link href="/packages">
                                    <Button
                                        variant="contained"
                                        className={styles.button}
                                        startIcon={<ArrowRightAltIcon component={motion.svg} className={styles.iconLeft}/>}
                                    >
                                        Discover
                                    </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Box className={styles.gridSocial}>
                            <Typography component="h2" variant="subtitleSocial">Do you want to contact us??</Typography>
                            <Box className={styles.socialContainer}>
                                <Box className={styles.iconContainer}>
                                    <Link href="https://www.instagram.com/charlescantinphotographer"><InstagramIcon className={styles.icon}/></Link>
                                    <Link href="https://es-la.facebook.com/"><FacebookIcon className={styles.icon}/></Link>
                                </Box>
                                <Box className={styles.social}>
                                    <PhoneIcon/><Typography variant="social">+33 7 66666666</Typography>
                                </Box>
                                <Box className={styles.social}>
                                    <AlternateEmailIcon/><Typography variant="social">charlescantin@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </AnimatePresence>
    )
}

