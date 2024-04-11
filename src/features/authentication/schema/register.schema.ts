import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Veuillez rentrer une adresse email valide"),
  lastname: z.string({required_error: "Veuillez saisir votre nom"}),
  firstname: z.string({required_error: "Veuillez saisir vos prénoms"}),
  role: z.string(),
  password: z
    .string({ required_error: "Veuillez entrer un mot de passe valide" })
    .min(8, "Veuillez renseigner un minimum de Huit caractères"),
});
