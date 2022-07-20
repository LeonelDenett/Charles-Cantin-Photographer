// Mui Components
import Box from '@mui/material/Box';
// Next
import Link from 'next/link';

function NotFound() {
    return (
        <Box>
            <h1>Oups...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </Box>
    );
}

export default NotFound;