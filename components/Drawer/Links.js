// Next
import Link from 'next/link';
// Mui Components
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';

function Links({url, title, color}) {
    return (
        <Link href={url}>
            <Typography variant="link" color={color}>{title}</Typography>
        </Link>
    );
}

export default Links;