import Collection from "../models/Collection.js";

export const getCollections = async (req, res) => {
  const collections = await Collection.find().populate("cars").populate("owner", "name");
  res.json(collections);
};

export const addCollection = async (req, res) => {
  const collection = await Collection.create({ ...req.body, owner: req.user.id });
  res.json(collection);
};

export const updateCollection = async (req, res) => {
  const collection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(collection);
};

export const deleteCollection = async (req, res) => {
  await Collection.findByIdAndDelete(req.params.id);
  res.json({ message: "Collection deleted" });
};
