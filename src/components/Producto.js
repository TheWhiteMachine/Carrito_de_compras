import { Component } from "react";
class Producto extends Component{
    render(){
        const {producto} = this.props
        return(
         <div>
             <img alt={producto.name} src={producto.img} /> 
         </div>

        )
    }  
}
export default Producto
