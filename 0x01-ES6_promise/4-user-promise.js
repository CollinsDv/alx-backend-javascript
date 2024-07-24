// return a resolved promise with this obj syntax:
// {FirstName: value, LastName: value}

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}

export default signUpUser;
