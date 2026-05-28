import GuestsModel from "../models/guests.model.js";

export const getAllGuests = async (request, response) => {
  const allGuests = await GuestsModel.getAll();
  response.status(200).json({
    guests: allGuests,
  });
};

export const createGuest = async (request, response) => {
  const body = request.body;
  const guest = await GuestsModel.create(body);
  response.status(201).json({
    message: "Guest created.",
    data: guest,
  });
};

export const getGuestById = async (request, response) => {
  const { id } = request.params;
  const guest = await GuestsModel.getById(id);
  response.status(200).json({
    data: guest,
  });
};

export const deleteGuest = async (request, response) => {
  const { id } = request.params;
  const guest = await GuestsModel.deleteGuest(id);
  response.status(200).json({
    message: "User deleted.",
    data: guest,
  });
};

export const updateGuest = async (request, response) => {
  const { id } = request.params;
  const body = request.body;
  const guest = await GuestsModel.updateGuest(id, body);
  response.status(200).json({
    message: "Guest updated.",
    data: guest,
  });
};
