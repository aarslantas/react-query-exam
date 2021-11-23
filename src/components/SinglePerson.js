import { useParams } from "react-router";
import { usePersonDetail } from "../hooks/usePersonDetail";

const SinglePersonPage = () => {
  const { personId } = useParams();
  const { isLoading, data, isError, error } = usePersonDetail(personId);

  if (isLoading) return <h2>Loading..</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      {data?.data.name} - {data?.data.surname}
    </div>
  );
};

export default SinglePersonPage;
