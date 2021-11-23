import axios from "axios";
import { useQueries } from "react-query";

const fetchPersons = (personId) => {
  return axios.get(`http://localhost:4000/persons/${personId}`);
};
const DynamicParallelQueries = ({ personIds }) => {
  const queryResults = useQueries(
    personIds.map((id) => {
      return {
        queryKey: ["person", id],
        queryFn: () => fetchPersons(id),
      };
    })
  );
  console.log(queryResults);
  return <div>asdasd</div>;
};

export default DynamicParallelQueries;
