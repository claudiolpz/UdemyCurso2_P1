import styled from '@emotion/styled';

export const Titulo = styled.h1`
font-size:30px;
text-align:center;
color:blue;
`
export const Circulo = styled.div`
    background-color: red;
    color: #fff;
    text-align: center;
    padding: 80px 0px 10px 0px;
    width: 280px;
    height: 200px;
    border: 5px solid blue;
    border-radius: 50%;
`
export const Triangulo = styled.div`
    color: black;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    border-bottom: 100px solid #f0ad4e;
    border-top: 100px solid transparent;

    font-size: 30px;
    font-weight: bold;
`
export const Caja = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    color:${props => props.color_custom || "cyan"};
`