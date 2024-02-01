import GetNetworkData from "../services/network";

async function ValidateNetworkData() {
  try {
    const response = await GetNetworkData();
    return response.records;
  } catch(error) {
    console.error(`Data is non existent: ${error}`)
  }
  return []
}

export default ValidateNetworkData;