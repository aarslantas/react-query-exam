import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const addPerson = (person) => {
  return axios.post("http://localhost:4000/persons", person);
};

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

export const useAddPerson = () => {
  const queryClient = useQueryClient();
  return useMutation(addPerson, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("persons"); // persons'ı yeniden değerlendirdik ve güncel veriyi çektik
    //   queryClient.setQueryData("persons", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async (newPerson) => {
      queryClient.cancelQueries("persons");
      const previousPersonData = queryClient.setQueryData(
        "persons",
        (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [
              ...oldQueryData.data,
              { id: oldQueryData?.data?.length + 1, ...newPerson },
            ],
          };
        }
      );

      return {
        previousPersonData,
      };
    },
    onError: (_error, _person, context) => {
      queryClient.setQueryData("persons", context.previousPersonData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("persons");
    },
  });
};
