export async function GetMood() {
  let json = null;
  try {
    const response =  await fetch(`http://192.168.0.86:5555/mood/`);
    if(response.status != 200) {
      console.log(response);
    } else {
      json = await response.json();
    }
  } catch (error) {
    console.log('Error found on api:');
    console.log(error);
  }
  return json;
}


export async function UpdateMood(state) {
  let json = null;
  try {
    const data = {
      state: state
    }
    const response =  await fetch(`http://192.168.0.86:5555/mood/`, {
      method: 'PUT',
      headers:{
        'Content-Type': ['application/json', 'text/plain'],
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    });
    if(response.status != 200) {
      console.log(response);
    } else {
      json = await response.json();
    }
  } catch (error) {
    console.log('Error found on api:');
    console.log(error);
  }
  return json;
}