import AdherentCard from "./AdherentCard";
import { ADHERENT_URL } from "@/utils/_constants";
import { useFetch } from "@/hooks";
import AdherentAdd from "./AdherentAdd";

const AdherentList = () => {
  const { isLoading, error, data: adherents, setData: SetAdherent } = useFetch(ADHERENT_URL);

  if (isLoading) return <p>En cours de chargement ....</p>;
  if (!isLoading && error)
    return (
      <p className="text-red-800 font-semibold text-2xl">{error.message}</p>
    );

  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAdd setAdherent={SetAdherent} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {adherents.map((adherent: Adherent) => (
          <AdherentCard adherent={adherent} key={adherent.id} />
        ))}
      </div>
    </>
  );
};

export default AdherentList;
