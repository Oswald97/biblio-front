import { useEffect, useState } from "react";

const useFetch = (apiUrl: string, option:any =null ) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | { message: string }>(null);
  const [data, setData] = useState([]);
  
  useEffect(() => {

    async function getData() {
      try {
        const response = await fetch(apiUrl, option);
        if (!response.ok) throw new Error("HTTP error " + response.status);

        const data = await response.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError({message: "Une erreur"})
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return { isLoading, error, data , setData }
}

export default useFetch