import AdherentCard from "./AdherentCard";
import AdherentAdd from "./AdherentAdd";
import { useGetAdherentsQuery } from "../services";

const AdherentList = () => {
  const { isLoading, error, data: adherents } = useGetAdherentsQuery()

  if (isLoading) return <p>En cours de chargement ....</p>;
  if (!isLoading && error)
    return (
      <p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
    );

  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAdd />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {adherents && adherents.map((adherent: Adherent) => (
          <AdherentCard adherent={adherent} key={adherent.id} />
        ))}
      </div>
    </>
  );
};

export default AdherentList;
