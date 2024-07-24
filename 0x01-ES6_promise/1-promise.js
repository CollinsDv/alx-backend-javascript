// Using the prototype below, return a promise. The parameter is a boolean

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        'status': 200,
        'body': 'Success'
      });
    } else {
      reject('the fake API is not working currently');
    }
  });
}