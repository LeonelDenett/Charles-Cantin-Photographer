// Next
import Link from 'next/link';
import Image from 'next/image';
// Styles
import styles from '../styles/Home.module.css';
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// Icons Mui Components
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
// Components
import CarouselImages from '../components/Carousel/Carousel';
// Framer Motion
import {motion} from 'framer-motion';


import Bebe from '../galerie/bebe.jpeg'


export default function Home() {
    return (
        <Box className={styles.container}>
            {/* Carousel */}
            <Box>
                <CarouselImages />
            </Box>
            {/* Content */}
            <Box className={styles.content} sx={{marginX: {lg: '10rem'}}}>
                <Typography component="h1" variant="title">Le Studio Charles Cantin</Typography>
                <Typography variant="description">C’est l’histoire de… en fait,
                          c’est votre histoire que j'immortalise : mariage, grossesse, baptême ; seul, en couple ou bien en famille.
                          Ma principale préoccupation est de répondre le plus précisément et en qualité d’image à la demande de mes clients.
                          Je mets également un point d’honneur à respecter les contraintes de temps !
                </Typography>

                <Divider className={styles.divider} />

                <Grid container rowSpacing={{xs:1, sm:2, md:3}} columnSpacing={{xs:1, sm:2, md:3}}>
                    {/* Packages */}
                    <Grid item xs={12} lg={6}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Box className={styles.gridPackages} sx={{paddingX: {md: '1rem', lg: '2rem'}}}>
                                    <Typography component="h2" variant="subtitle">Decouvert des Packages</Typography>
                                    <Typography variant="infos">Nous vous proposons des forfaits, découvrez celui qui vous convient</Typography>
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
                                    <Image src={Bebe} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Portfolio */}
                    <Grid item xs={12} lg={6}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Box className={styles.gridPortfolioImage}>
                                    <Image src={Bebe} />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className={styles.gridPortfolio} sx={{paddingX: {md: '1rem', lg: '2rem'}}}>
                                    <Typography component="h2" variant="subtitle">Let's check our portfolio</Typography>
                                    <Typography variant="infos">Nous vous proposons des forfaits, découvrez celui qui vous convient</Typography>
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
                            <Typography component="h2" variant="subtitle">Quieres contactarnos?</Typography>
                            <Box className={styles.socialContainer}>
                                <Box className={styles.social}>
                                    <Link href="https://www.instagram.com/charlescantinphotographer"><InstagramIcon className={styles.icon}/></Link>
                                    <Link href="https://es-la.facebook.com/"><FacebookIcon className={styles.icon}/></Link>
                                </Box>
                                <Box className={styles.social}>
                                    <PhoneIcon/><Typography>+33 7 66666666</Typography>
                                </Box>
                                <Box className={styles.social}>
                                    <AlternateEmailIcon/><Typography>charlescantin@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
