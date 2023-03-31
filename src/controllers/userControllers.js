import { db } from "../database/database.js";
import userServices from "../services/userServices.js";

export async function signUp(req, res) {
   const { name, email, password, phone, cpf } = req.body;
   try {
     await userServices.create({name, email, password, phone, cpf})
    res.status(201).send('oi')
   } catch (error) {
     res.status(500).send(error.message);
   }
}
