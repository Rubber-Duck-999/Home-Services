import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AverageCard(values) {
  let created = 'Today';
  let average = 0;
  let title = 'N/A';
  let unit = 'N.A';
  if (values.choice) {
    title = 'Average Temperature';
    unit  = '°C';
  } else {
    title = 'Average Speed';
    unit  = ' MB/s';
  }
  if (values.data.length > 0) {
    for (let i = 0; i < values.data.length; i++) {
      if (values.choice == true) {
        average = average + values.data[i].temperature;
      } else {
        average = average + values.data[i].download;
      }
    }
    const index = values.data.length - 1;
    created = values.data[index].created;
    average = (average / values.data.length).toFixed(2);
  }
  return (
    <div>
      <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
        Last Received: {created}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {average}{unit}
      </Typography>
    </div>
  );
}