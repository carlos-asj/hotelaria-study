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

async function deleteGuest(id) {
  const result = await database.query({
    text: `DELETE FROM guests
    WHERE id = $1`,
    values: [id],
  });
}

async function updateGuest(id, body) {
  const result = await database.query({
    text: `UPDATE guests
    SET name = $1,
    email = $2,
    phone = $3,
    updated_at = NOW()
    WHERE id = $4
    RETURNING *`,
    values: [body.name, body.email, body.phone, id],
  });

  return result.rows[0];
}

const GuestsModel = {
  getAll,
  create,
  getById,
  deleteGuest,
  updateGuest,
};

export default GuestsModel;
