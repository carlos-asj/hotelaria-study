import database from "../../infra/database.js";

export const getAllGuests = async (request, response) => {
  const allGuests = await database.query("SELECT * FROM guests;");
  response.status(200).json({
    guests: allGuests.rows,
  });
};

export const createGuest = async (request, response) => {
  const body = request.body;
  const query = await database.query({
    text: "INSERT INTO guests(name, email, phone) VALUES($1, $2, $3)",
    values: [body.name, body.email, body.phone],
  });
  response.status(201).json({
    message: "Guest created.",
    data: body,
  });
};

export const getGuestById = async (request, response) => {
  const { id } = request.params;
  const result = await database.query({
    text: "SELECT * FROM guests WHERE id = $1",
    values: [id],
  });
  response.status(200).json({
    guest: result.rows[0].name,
  });
};
