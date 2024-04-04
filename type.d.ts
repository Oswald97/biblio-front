type Adherent = {
  id?: string;
  pseudo: string;
  nom: string;
  prenoms: string;
  genre: string;
  adresse: {
    rue: string;
    ville: string;
    codePostal: string;
    numeroTelephone: string;
  };
  dateInscription?: string;
  nombreEmpruntEnCours?: number;
}
