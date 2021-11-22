import { useQuery } from "react-query";
import axios from "axios";

const ReactQueryPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "persons",
    () => axios.get("http://localhost:4000/persons"),
    {
      //   cacheTime: 5000,
      //staleTime: 10000,
    }
  );

  console.log("isLoading", isLoading, "isFetching", isFetching);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      <h2>ReactQueryPage</h2>
      {data?.data.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </>
  );
};

export default ReactQueryPage;
