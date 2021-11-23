import { useQuery } from "react-query";
import axios from "axios";

const fetchPersonDetail = (personId) => {
  return axios.get(`http://localhost:4000/persons/${personId}`);
};
export const usePersonDetail = (personId) => {
  return useQuery(["person-detail", personId], () =>
    fetchPersonDetail(personId)
  );
};
