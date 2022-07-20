// Next
import Image from 'next/image';
// Mui Components
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// Framer Motion
import {motion} from 'framer-motion';

// Function Srcset for Image
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

function Items({data, styles}) {
    // Querys
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ImageList
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={300}
        >
            {data.map((value) => {
            const {id, img, rows, cols, title} = value;
            return (
            <ImageListItem whileTap={{scale: 0.7}} component={motion.li} key={id} cols={matchDownMd ? 4 : cols || 1} rows={rows || 1}>
                <Image
                    layout="fill"
                    {...srcset(300, rows, cols)}
                    src={img}
                    alt={title}
                    quality={100}
                    objectFit="fill"
                    loading="lazy"
                    className={styles.photos}
                />
            </ImageListItem>
            )
            })}
        </ImageList>
    );
}

export default Items;