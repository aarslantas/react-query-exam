import axios from "axios";
import { useQuery } from "react-query";

const fetchPersons = () => {
  return axios.get("http://localhost:4000/persons");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const { data: persons } = useQuery("persons", fetchPersons);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>Parallel</div>;
};

export default ParallelQueriesPage;
