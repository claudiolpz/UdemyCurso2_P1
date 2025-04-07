import { useLocation } from "react-router-dom";
const RutasQueryString = () => {
  const search = useLocation().search;
  let id = new URLSearchParams(search).get("id");
  //const slug = new URLSearchParams(search).get("slug");

  return (
    <>
      <h2>Ejemplo Query String</h2>
      <hr />
      <ul>
        <li>ID: {id}</li>
        <li>Slug: {slug}</li>
      </ul>
    </>
  );
};

export default RutasQueryString;
