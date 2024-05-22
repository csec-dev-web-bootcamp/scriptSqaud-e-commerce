import express from 'express';
import { asyncHandler } from '../helpers/async-handler';
import { authGuard } from '../auth/auth.guard';
import { roleGuard } from '../auth/role.guard';
import { createProfile, fetchProfile, updateProfile } from "./profile.service"

const profileController = express.Router();