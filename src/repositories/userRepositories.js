import { db } from "../database/database.js";

async function create({ name, email, password, phone, cpf }) {
  await db.query(
    `
      INSERT INTO users (name, email, password, phone, cpf)
      VALUES ($1, $2, $3, $4, $5)
      `,
    [name, email, password, phone, cpf]
  );
}

export default{
    create,
}
