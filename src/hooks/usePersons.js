import axios from "axios";
import { useQuery } from "react-query";

export const usePersons = (onSuccess, onError) => {
  return useQuery("persons", () => axios.get("http://localhost:4000/persons"), {
    onSuccess,
    onError,
    // select: (data) => {
    //   const persons = data.data.map((person) => person.name);
    //   return persons;
    // },
  });
};
