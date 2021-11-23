import axios from "axios";
import { useEffect, useState } from "react";

const PersonPage = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/persons")
      .then((response) => response.json())
      .then((persons) => setPersons(persons));
  }, []);

  console.log(persons);
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  );
};

export default PersonPage;
