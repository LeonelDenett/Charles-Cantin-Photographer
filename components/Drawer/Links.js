// Next
import Link from 'next/link';
// Mui Components
import Typography from '@mui/material/Typography';

function Links({url, title, color, i}) {
    return (
        <Link href={url} key={i}>
            <Typography variant="link" color={color}>{title}</Typography>
        </Link>
    );
}

export default Links;