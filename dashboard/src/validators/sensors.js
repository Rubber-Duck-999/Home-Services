import GetSensorData from "../services/sensors";
import dateFormat from "dateformat";

async function ValidateSensorsData() {
  try {
    const response = await GetSensorData();
    for (let x = 0; x < response.records.length; x++) {
      const date = new Date(response.records[x].created);
      response.records[x].time = dateFormat(date, "dddd HH:00");
    }
    return response.records;
  } catch(error) {
    console.error(`Data is non existent: ${error}`)
  }
  return []
}

export default ValidateSensorsData;