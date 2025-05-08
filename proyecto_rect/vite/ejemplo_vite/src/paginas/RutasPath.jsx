import { useParams } from "react-router";
const RutasPath = () => {
  const { id, slug } = useParams();

  return (
    <>
      <h2>Rutas Path</h2>
      <hr />
      <ul>
        <li>ID: {id}</li>
        <li>Slug: {slug}</li>
      </ul>
    </>
  );
};

export default RutasPath;
