import {GetMood, UpdateMood} from "../services/mood";

export async function ValidateMoodData() {
  let updatedMood = {
    state: 'N/A',
    updated: 'N/A'
  };
  try {
    const response = await GetMood();
    updatedMood.state = response.mood[0].state;
    updatedMood.updated = response.mood[0].updated;
  } catch(error) {
    console.error(`Data is non existent: ${error}`)
  }
  return updatedMood;
}

export async function UpdateMoodData(state) {
  let updatedMood = {
    state: 'N/A',
    updated: 'N/A'
  };
  try {
    const response = await UpdateMood(state);
    updatedMood.state = response.mood.state;
    updatedMood.updated = response.mood.updated;
  } catch(error) {
    console.error(`Data is non existent: ${error}`)
  }
  return updatedMood;
}