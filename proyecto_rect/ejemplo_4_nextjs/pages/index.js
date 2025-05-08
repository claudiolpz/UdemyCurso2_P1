import Frontend from "@/components/Frontend";
import styled from './../styles/ejemplo.module.css'

export default function Home() {
  return (
    <>
      <Frontend title={'Inicio'}>
      <h1 className={styled.ejemplo_module}>Hola mundo desde NextJs</h1>    
      </Frontend>
    </>

  );
}
