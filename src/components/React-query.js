import { useQuery } from "react-query";
import axios from "axios";

const ReactQueryPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect afterencountiring error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "persons",
    () => axios.get("http://localhost:4000/persons"),
    {
      //cacheTime: 5000,
      //staleTime: 10000,
      //   refetchOnMount: true,
      //refetchOnWindowFocus: false,
      //   refetchInterval: 2000,
      //   refetchIntervalInBackground: true,
      //enabled: false,
      //onSuccess: onSuccess,
      //onError: onError,
      select: (data) => {
        const persons = data.data.map((person) => person.name);
        return persons;
      },
    }
  );

  //   console.log("isLoading", isLoading, "isFetching", isFetching);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  console.log(data);
  return (
    <>
      <h2>ReactQueryPage</h2>
      {/* <button onClick={refetch}>Fetch persons</button> */}
      {/* {data?.data.map((person) => (
        <div key={pers
            on.id}>{person.name}</div>
      ))} */}
      {data.map((person) => {
        return <div key={person}>{person}</div>;
      })}
    </>
  );
};

export default ReactQueryPage;
