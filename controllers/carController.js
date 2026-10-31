import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  const cars = await Car.find().populate("owner", "name");
  res.json(cars);
};

export const addCar = async (req, res) => {
  const car = await Car.create({ ...req.body, owner: req.user.id });
  res.json(car);
};

export const updateCar = async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
};

export const deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted" });
};
