import AdherentCard from "./AdherentCard";
import { ADHERENT_ACTIONS, ADHERENT_URL } from "@/utils/_constants";
import { useFetch } from "@/hooks";
import AdherentAdd from "./AdherentAdd";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

const AdherentList = () => {
  const { isLoading, error, data: adherents } = useFetch(ADHERENT_URL);

  const dispatch = useDispatch()
  const adherentList = useSelector((state: adherentState) => {
    return state.adherentList
    
  })

  useEffect(() => {
    if(adherents.length > 0) 
      dispatch({ type: ADHERENT_ACTIONS.SET, payload: adherents })
  }, [adherents]);


  if (isLoading) return <p>En cours de chargement ....</p>;
  if (!isLoading && error)
    return (
      <p className="text-red-800 font-semibold text-2xl">{error.message}</p>
    );

  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAdd />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {adherentList.map((adherent: Adherent) => (
          <AdherentCard adherent={adherent} key={adherent.id} />
        ))}
      </div>
    </>
  );
};

export default AdherentList;
