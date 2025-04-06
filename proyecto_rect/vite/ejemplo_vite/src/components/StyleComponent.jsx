import {Titulo, Triangulo, Circulo, Caja} from './../styled/Estilos.jsx';

const StyleComponent = () => {
  return (
    <>
        <h1>Styled Component</h1>
        <hr />
        <Titulo>Hola desde el componente</Titulo>
        <hr />
        <Circulo>Hola desde el circulo</Circulo>
        <hr />
        <Triangulo>t</Triangulo>
        <hr />
        <Caja type="text" defaultValue="Sion" placeholder="Texto" color_custom="red"></Caja>
    </>
  );
};
export default StyleComponent;
