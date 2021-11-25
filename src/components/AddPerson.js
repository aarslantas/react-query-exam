import { useState } from "react";
import { useAddPerson, usePersons } from "../hooks/usePersons";

const AddPerson = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");

  const { isLoading, data, error, isError } = usePersons();
  const { mutate: addPerson } = useAddPerson();

  const submitHandler = () => {
    const person = { name, surname };
    addPerson(person);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="surname"
        onChange={(e) => setSurName(e.target.value)}
      />
      <button onClick={submitHandler}> AddPerson</button>

      <div>
        {data?.data.map((person) => (
          <h4 key={person.id}>
            {person.name}-{person.surname}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default AddPerson;
