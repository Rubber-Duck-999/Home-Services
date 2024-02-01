import Badge from "@mui/material/Badge";
import Chip from '@mui/material/Chip';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function GetDeviceBadge(device) {
    const colour = device.online ? "success" : "default";
    

    const chip = (device) => {
        if (device.type == "laptop") {
            return (
                <Chip
                    icon={<LaptopIcon />}
                    label={device.name}
                    color={colour}
                />);
        } else if (device.type === "phone") {
            return (
                <Chip
                    icon={<SmartphoneIcon />}
                    label={device.name}
                    color={colour}
                />);
        } else if (device.type === "gaming") {
            return (
                <Chip
                    icon={<SportsEsportsIcon />}
                    label={device.name}
                    color={colour}
                />);
        }
    }

    return (
        <Badge>
            {
                chip(device)
            }
        </Badge>);
}