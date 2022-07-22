// Mui components
import IconButton from '@mui/material/IconButton';
// Icons Mui Elements
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

function Icons({i,styles}) {
    const icons = [
        <HomeRoundedIcon key={i} color="whiteDark" />,
        <CameraAltRoundedIcon key={i} color="whiteDark"/>,
        <LocalOfferRoundedIcon key={i} color="brown"/>,
        <MailOutlineRoundedIcon key={i} color="brown"/>
    ]
    return (
        <IconButton className={styles.iconContainer} key={i}>
            {icons[i]}
        </IconButton>
    );
}

export default Icons;