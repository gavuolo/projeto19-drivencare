import httpStatus from "http-status";

export function handleApplicationErrors(err, req, res, next) {
  if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
    return res
      .status(httpStatus.CONFLICT)
      .send({ message: err.message, email: err.email });
  }
}