// Next
import {useState} from 'react';
// Mui Components
import Box from '@mui/material/Box';
// Components
import Data from './Data';
import Item from './Item'

function Cards() {
    const [data, setData] = useState(Data);
    return (
        <Box>
            <Item data={data} />
        </Box>
    );
}

export default Cards;