// return a Promise using the prototype getResponseFromAPI()

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('response')
  }); 
};

export default getResponseFromAPI;
