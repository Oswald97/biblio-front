import AdherentCard from "./AdherentCard";

const AdherentList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
    </div>
  );
};

export default AdherentList;
