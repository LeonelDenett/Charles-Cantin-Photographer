// React
import {useState} from 'react'
// Mui Components
import Box from '@mui/material/Box';
// Components
import Data from './Data'
import Tabs from './Tabs'
import Items from './Items'

function Gallery({styles}) {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
    return (
        <Box className={styles.gridPhotos}>
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} styles={styles} />
        </Box>
    );
}

export default Gallery;