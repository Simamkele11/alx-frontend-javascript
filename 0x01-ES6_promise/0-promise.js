function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('true');
      } else {
        reject(new Error('errors'));
      }
    }, 2000);
  });
}

getResponseFromAPI()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
