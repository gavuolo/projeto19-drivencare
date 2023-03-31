function conflictError(message) {
  //console.log("aqui caralho", message)
  return {
    name: "ConflictError",
    message,
  };
}

function duplicatedEmailError(email) {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
    email,
  };
}

export default {
  conflictError,
  duplicatedEmailError,
};
