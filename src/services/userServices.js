import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function create({ name, email, password, phone, cpf }) {
    const hashPassword = await bcrypt.hash(password, 10);
    //criptografar senha
    await userRepositories.create({ name, email, password: hashPassword, phone, cpf });
}

export default {
  create,
};
