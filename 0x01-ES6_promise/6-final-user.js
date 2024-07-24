import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';
// write and export func handleProfileSignup
// accepts firstName, lastName and fileName
// it uses imported funcs signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js
// on all promise settlement, it returns:
// [
//   {
//     status: status_of_the_promise,
//     value: value or error returned by the Promise
//   },
//   ...
// ]

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}
