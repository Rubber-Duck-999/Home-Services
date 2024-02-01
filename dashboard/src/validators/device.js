import GetNetworkData from "../services/device";

export async function ValidateDeviceData() {
  try {
    const response = await GetNetworkData();
    console.group(response);
    return response;
  } catch (error) {
    console.error(`Data is non existent: ${error}`)
  }
  return []
}

export async function CreateDevice() {
  try {
    console.log("Creating device");
  } catch (error) {
    console.error(`Data is non existent: ${error}`)
  }
}
