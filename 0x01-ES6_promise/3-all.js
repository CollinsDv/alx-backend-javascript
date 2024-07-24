import { uploadPhoto, createUser } from './utils';

// collectively resolve all promises and
// log body firstName lastName to the console.
function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const photo = values[0].body;
      const { firstName } = values[1];
      const { lastName } = values[1];

      console.log(`${photo} ${firstName} ${lastName}`);
    });
}

export default handleProfileSignup;
