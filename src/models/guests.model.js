import database from "../../infra/database.js";

async function getAll() {
  const result = await database.query("SELECT * FROM guests;");
  return result.rows;
}

async function create({ name, email, phone }) {
  const result = await database.query({
    text: `INSERT INTO guests(name, email, phone)
    VALUES ($1, $2, $3)
    RETURNING *`,
    values: [name, email, phone],
  });
  return result.rows[0].name;
}

async function getById(id) {
  const result = await database.query({
    text: `SELECT * FROM guests
    WHERE id = $1`,
    values: [id],
  });

  return result.rows[0].name;
}

const GuestsModel = {
  getAll,
  create,
  getById,
};

export default GuestsModel;
