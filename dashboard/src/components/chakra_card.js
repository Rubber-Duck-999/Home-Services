import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { red, green } from '../assets/images';

export default function AlarmCard() {
    let locked = false;
    let alarmStatus = locked ? "Active" : "Inactive";
    const time = "12:00:25 GMT";
    let alarmSwitch = locked ? "Deactive the alarm" : "Activate the alarm";

    const handleClick = () => {
        locked = locked == true ? false : true;
        console.log(locked);
    }

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={locked == true ? green : red}
                    height={160}
                    alt="lock-status"
                    caption={locked == true ? <LockIcon fontSize='large'/> : <LockOpenIcon fontSize='large'/>}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Alarm is currently {alarmStatus}</Text>
                <Badge color={locked ? "green" : "red"} variant="light">
                    {time}
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                If you want to turn the alarm on please press here
            </Text>

            <Button onClick={handleClick} variant="light" color={locked ? "red" : "green"} fullWidth mt="md" radius="md">
                {alarmSwitch}
            </Button>
        </Card>
    );
}