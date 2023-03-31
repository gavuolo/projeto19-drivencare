import { db } from "../database/database.js";
import userServices from "../services/userServices.js";

export async function signUp(req, res, next) {
  const { name, email, password, phone, cpf } = req.body;
  try {
    await userServices.create({ name, email, password, phone, cpf });
    return res.sendStatus(201);
  } catch (err) {
    next(err)
  }
}
