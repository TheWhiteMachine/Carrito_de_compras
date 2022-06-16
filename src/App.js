import { Component } from 'react';
import Productos from './components/Productos.js';

class App extends Component {
state = {
  productos :[
   { name :'Tomate', price: 75, img:'./productos/tomate.jpg'},
   { name :'lechuga', price: 45, img:'./productos/lechuga.jpg'},
   { name :'Arbejas', price: 55, img: './productos/arbejas.jpg'},
  ]
}
  render() {
    return (
      <div>
        <h1> Proyecto Carrito </h1>
        <Productos 
        agregarAlCarro={() => console.log('nada')}
        productos={this.state.productos}
        />
      </div>        
   )
  }
}

export default App;
