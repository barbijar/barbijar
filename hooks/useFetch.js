import React, { useState, useEffect } from "react";

import axios from "axios";

export default function useFetch(url, options) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url, options);

        if (!res || res === undefined || res === 'undefined') {
          return <div>Loading...</div>
        }
        
        setResponse(res);
      } catch (error) {
        console.log(error);
        setError(error);
      }

    };

    getData();
  }, []);

  return { response, error };
}
