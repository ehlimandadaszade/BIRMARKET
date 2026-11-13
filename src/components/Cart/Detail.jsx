import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">
        Product Detail
      </h1>

      <p>Product ID: {id}</p>
    </div>
  );
}

export default Detail;