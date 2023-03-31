import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import errors from '../errors/index.js'
import { v4 as uuidV4 } from "uuid";

async function create({ name, email, password, phone, cpf }) {
  //verificação de email
  const { rowCount } = await userRepositories.findByEmail(email);
  if(rowCount) throw errors.duplicatedEmailError(email)
  //criptografar senha
  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({
    name,
    email,
    password: hashPassword,
    phone,
    cpf,
  });
}

export default {
  create,
};
