import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Veuillez rentrer une adresse email valide"),
  password: z
    .string({ required_error: "Veuillez entrer un mot de passe valide" })
    .min(8, "Veuillez renseigner un minimum de Huit caractères"),
});
