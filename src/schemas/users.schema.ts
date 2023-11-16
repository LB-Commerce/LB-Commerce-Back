import { z } from "zod";
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "Cpf deve estar no formato 123.456.789-00",
  }),
  phone: z.string().max(12),
  password: z.string().min(6).max(12),
  is_admin: z.boolean().optional().default(false),
});

export const userSchemaRequest = userSchema.omit({ id: true });

export const userSchemaResponse = userSchema.omit({
  password: true,
  cpf: true,
  is_admin: true,
});

export const userSchemaRequestUpdate = userSchemaRequest.partial();

export const allUsersSchema = userSchemaResponse.array();
