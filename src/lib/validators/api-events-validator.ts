import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"
import { z } from "zod"

export const EVENTS_REQUEST_VALIDATOR = z
  .object({
    category: CATEGORY_NAME_VALIDATOR,
    fields: z.record(z.string().or(z.number())).or(z.boolean()).optional(),
    description: z.string().optional(),
  })
  .strict()

export const EVENTS_BY_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  page: z.number(),
  limit: z.number().max(50),
  timeRange: z.enum(["today", "week", "month"]),
})
