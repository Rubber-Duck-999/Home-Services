import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Chip
} from '@mui/material/';
import { ValidateDeviceData } from '../validators/device';
import DeviceTable from '../components/device_table';
import CreateIcon from '@mui/icons-material/Create';
import FormDialog from '../components/create_form_dialog';
import Title from '../components/title';


function Devices() {
    let [data, setData] = useState([]);

    React.useEffect(() => {
        (async () => {
            const data = await ValidateDeviceData();
            setData(data);
        })();
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    return (
        <div>
            <Title title="Network Devices" />
            <Card>
                <CardContent>
                    {data != null &&
                        <DeviceTable data={data} />}
                    <CardActions>
                        <Chip
                            icon={<CreateIcon />}
                            label="Create"
                            color="primary"
                            onClick={handleClickOpen}
                        />
                        {
                            FormDialog(open, handleClose)
                        }
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}

export default Devices;