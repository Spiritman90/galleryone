import { useState, useEffect } from "react";

const useObject = (url) => {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        setIsLoading(true);
        if (!res.ok) {
          throw Error(`Cannot fetch data from that resource`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);
  return [data, IsLoading, error];
};

export default useObject;
