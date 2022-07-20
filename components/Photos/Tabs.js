// Mui Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Tabs({filterCategory, tabsData,data}) {
    return (
        <Box>
            {
            tabsData.map((category, index, icon)=>{
                return (
                    <Button variant="link" onClick={()=> filterCategory(category)} key={index}>{category}</Button>
                )
            })
            }
        </Box>
    );
}

export default Tabs;