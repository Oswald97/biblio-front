import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const adherentSchema = z.object({
  pseudo: z
    .string({ required_error: "Veuillez entrer un pseudo" })
    .min(8, "Veuillez renseigner un minimum de trois caractères"),
  nom: z
    .string({ required_error: "Veuillez entrer le nom de l'adhérent" })
    .min(3, "Veuillez renseigner un minimum de trois caractères"),
  prenoms: z.string({
    required_error: "Veuillez entrer le prénom de l'adhérent",
  }),
  adresse: z.object({
    rue: z.string().nullable(),
    ville: z.string().nullable(),
    codePostal: z.string().nullable(),
    numeroTelephone: z
      .string({ required_error: "Veuillez entrer le numero de téléphone" })
      .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  }),
  genre: z.enum(["MASCULIN", "FEMININ", "INCONNU"], {
    required_error: "Vous devez sélectionner votre genre",
  }),
  dateInscription: z.date({
    required_error: "Vous devez sélectionner votre genre",
  }),
  nombreEmpruntEnCours: z.number().default(0),
});
