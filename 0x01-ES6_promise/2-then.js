// handle success, errors and for every resolution, log 'Got a
// solution from the api to console

function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
