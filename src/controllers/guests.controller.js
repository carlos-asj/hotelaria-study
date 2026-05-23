import database from "../../infra/database.js";

export const getAllGuests = async (request, response) => {
  const allGuests = await database.query("SELECT * FROM guests;");
  response.status(200).json({
    guests: allGuests.rows[0],
  });
};
