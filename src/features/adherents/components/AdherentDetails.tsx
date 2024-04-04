import { useParams } from "react-router-dom";

const AdherentDetails = () => {
  let { id } = useParams();
  return <div>AdherentDetails: {id}</div>;
};

export default AdherentDetails;
