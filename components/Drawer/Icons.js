// Mui components
import IconButton from '@mui/material/IconButton';
// Icons Mui Elements
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const icons = [
    <HomeRoundedIcon color="whiteDark" />,
    <CameraAltRoundedIcon color="whiteDark"/>,
    <LocalOfferRoundedIcon color="brown"/>,
    <MailOutlineRoundedIcon color="brown"/>
]

const ids= [1,2,3,4]

function Icons({i,styles, color}) {
    return (
        <IconButton className={styles.iconContainer} key={ids}>
            {icons[i]}
        </IconButton>
    );
}

export default Icons;