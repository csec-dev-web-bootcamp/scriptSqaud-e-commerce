import { z } from 'zod';

export const createProfileSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    phone: z.string().min(3).max(30),
  }) 