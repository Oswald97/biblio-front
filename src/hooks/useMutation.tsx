import { useState } from "react";

const useMutation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | { message: string }>(null);
  const [data, setData] = useState([]);

  async function getData(apiUrl: string, option: any = undefined) {
    try {
      const response = await fetch(apiUrl, option);
      if (!response.ok) throw new Error("HTTP error " + response.status);

      const dataResponse = await response.json();

      setData(dataResponse);
      setIsLoading(false);
      return dataResponse;
    } catch (error) {
      setError({ message: "Une erreur" });
      setIsLoading(false);
    }
  }
  const handleMutation = (
    route: string,
    option: any,
    callbackFn: any
  ) => {
    getData(route, option).then((dataResponse) => {
      callbackFn(dataResponse);
    });
  };

  return { isLoading, error, data, handleMutation };
};

export default useMutation;
