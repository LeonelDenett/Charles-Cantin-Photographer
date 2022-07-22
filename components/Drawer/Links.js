// Next
import Link from 'next/link';
// Mui Components
import Typography from '@mui/material/Typography';

function Links({url, title, color}) {
    return (
        <Link href={url}>
            <Typography variant="link" color={color}>{title}</Typography>
        </Link>
    );
}

export default Links;