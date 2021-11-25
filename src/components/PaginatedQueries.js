import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      //keepPreviousData: true, // yeni data gelene kadar önceki state1
    }
  );

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>{error.message}</div>;

  console.log("pageNumber", pageNumber);

  return (
    <>
      <div>
        {data?.data.map((color) => (
          <div key={color.id}>{color.label}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next page
        </button>
      </div>

      {isFetching && <span>Loading..</span>}
    </>
  );
};

export default PaginatedQueries;
