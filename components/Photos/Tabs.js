// Mui Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Tabs({filterCategory, tabsData}) {
    return (
        <Box>
            {
            tabsData.map((category, index)=>{
                return (
                    <Button style={{position: 'relative', top: '0.5rem'}} variant="link" onClick={()=> filterCategory(category)} key={index}>{category}</Button>
                )
            })
            }
        </Box>
    );
}

export default Tabs;