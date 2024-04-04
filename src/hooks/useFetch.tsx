import { useEffect, useState } from "react";

const useFetch = (apiUrl: string) => {
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | { message: string }>(null);

  useEffect(() => {

    async function getData() {
      try {
        const response = await fetch(apiUrl);
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

  return { isLoading, error, data }
}

export default useFetch