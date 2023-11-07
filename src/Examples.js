import useJsonFetch from "./useJsonFetch";

export function Success() {
  const { data, error, fetchData } = useJsonFetch('http://localhost:7070/data');

  return (
    <div className="div">
      <button onClick={fetchData}>Success</button>
      <span> {Object.keys(data).length > 0 && `Recieved data: ${JSON.stringify(data)}`}</span>
      <span> {error && `${error}`}</span>
    </div>
  );
}

export function Error() {
  const { error, fetchData } = useJsonFetch('http://localhost:7070/error');
  
  return (
    <div className="div">
      <button onClick={fetchData}>Error</button>
      <span> {error && `${error}`}</span>
    </div>
  );
}

export function Loading() {
  const { data, loading, error, fetchData } = useJsonFetch('http://localhost:7070/loading');

  return (
    <div className="div">
      <button onClick={fetchData}>Loading</button>
      <span> {`Loading: ${loading}`}</span>
      <span>{Object.keys(data).length > 0 && `. Recieved data: ${JSON.stringify(data)}`}</span>
      <span> {error && `. ${error}`}</span>
    </div>
  );
}
