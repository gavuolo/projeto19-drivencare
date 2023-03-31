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

async function findByEmail(email) {
  return await db.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email]
  );
}

export default{
    create,
    findByEmail,
}
