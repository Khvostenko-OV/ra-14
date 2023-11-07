import { useState, useRef } from 'react';

export default function useJsonFetch(url, opts={}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const timestampRef = useRef();

  const fetchData = async () => {
    const timestamp = Date.now();
    timestampRef.current = timestamp;
    setLoading(true);
    try {
      const response = await fetch(url, opts);
      if (!response.ok) { throw new Error(response.statusText); }
      const json = await response.json();
      if (timestampRef.current === timestamp) { setData(json); }
      setError('');
    } catch (e) { setError(e);
    } finally { setLoading(false); }
  };

  return {data, loading, error, fetchData};
}
