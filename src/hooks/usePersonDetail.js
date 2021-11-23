import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchPersonDetail = (personId) => {
  return axios.get(`http://localhost:4000/persons/${personId}`);
};
export const usePersonDetail = (personId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["person-detail", personId],
    () => fetchPersonDetail(personId),
    {
      initialData: () => {
        const person = queryClient
          .getQueryData("persons")
          ?.data?.find((person) => person.id === parseInt(personId));
        if (person) {
          return {
            data: person,
          };
        } else {
          return undefined;
        }
      },
    }
  );
};
