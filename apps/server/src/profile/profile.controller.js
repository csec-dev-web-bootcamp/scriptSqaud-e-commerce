import express from "express";
import {
  createProfile,
  deleteProfile,
  getOneProfile,
  updateProfile,
  fetchProfileAddress,
} from "./profile.service";
import { createProfilePipe, updateProfilePipe } from "./profile.pipe";

const profileController = express.Router();

profileController.post("/", createProfilePipe, async (req, res) => {
  const data = req.body;
  const profile = await createProfile(data);
  return res.json(profile);
});

profileController.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const profile = await getOneProfile(userId);
  return res.json(profile);
});

profileController.put("/:userId", updateProfilePipe, async (req, res) => {
  const data = req.body;
  const { userId } = req.params;
  const profile = await updateProfile(userId, data);
  return res.json(profile);
});

profileController.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  const profile = await deleteProfile(userId);
  return res.json(profile);
});

profileController.get("/:userId/address", async (req, res) => {
  const { userId } = req.params;
  const address = await fetchProfileAddress(userId);
  return res.json(address);
});

export default profileController;