import React from 'react'

export default class ComponenteDeClase extends React.Component {
    constructor(props){
        console.log('constructor no montado');
        super();
        this.state={
            contador:0,
            name:'Claudio',
        };
    }
    componentDidMount(){
        console.log('montado');
        setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        console.log('eliminado');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('actualizado');
    }
    render(){
        console.log('renderizado')
        return(
            <div className="container"> 
                <h1>Hola desde comp</h1>
                <p>Contador = {this.state.contador}</p>
            </div>
            
        )
    }
}