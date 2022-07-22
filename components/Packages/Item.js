// Next
import Image from 'next/image';
import Link from 'next/link';
// Mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// Framer Motion
import {motion} from 'framer-motion';

function Item({data}) {
    return (
        <Box style={{display: 'flex' }}>
            <Grid container justifyContent={'center'} rowSpacing={2} columnSpacing={2}>
            {
            data.map((value) => {
            const {id, title, description, price, image, objectFit} = value;
            return (
                <Grid item xs={12} sm={6} lg={3} key={id}>
                    <Card key={id} sx={{ minWidth: 300 }} component={motion.div} whileHover={{ scale: 1.05}}>
                        <CardActionArea>
                            <CardMedia>
                                <Box style={{height: 240, width: '100%', position: 'relative'}}>
                                    <Image
                                        layout="fill"
                                        src={image}
                                        quality={100}
                                        priority
                                        alt={title}
                                        objectFit="cover"
                                    />
                                </Box>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description} - {price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            <Link href="/contact">
                                <Button variant="outlined" size="small" color="brownDark">
                                Contact
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            )})
            }
            </Grid>
        </Box>
    );
}

export default Item;