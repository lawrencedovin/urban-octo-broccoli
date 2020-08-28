// function displayInitials(user){
//   let firstNameLetter = user.firstName[0].toUpperCase();
//   let lastNameLetter = user.lastName[0].toUpperCase();
//   return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }

function displayInitials(user){
  let firstNameLetter;
  let lastNameLetter;
  try {
    firstNameLetter = user.firstName[0].toUpperCase();
    lastNameLetter = user.lastName[0].toUpperCase();
  } catch(e){
    return "Invalid input!";
  }
  return `Hello ${firstNameLetter}.${lastNameLetter}`;
}