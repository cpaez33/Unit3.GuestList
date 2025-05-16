import { useState, useEffect } from "react";

export default function useGuests() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-FT/guests"
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data);
        setGuests(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return { guests, isLoading, error };
}
