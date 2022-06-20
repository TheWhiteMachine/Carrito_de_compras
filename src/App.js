import { Component } from 'react';
import Productos from './components/Productos.js';
import Layout from './components/Layout.js';
import Title from './components/Title.js';
import Navbar from './components/Navbar.js';


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
       <Navbar /> 
       <Layout>
        <Title />
        <Productos 
        agregarAlCarro={() => console.log('nada')}
        productos={this.state.productos}
        />
        </Layout>
      </div>        
   )
  }
}

export default App;
