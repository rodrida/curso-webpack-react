// empezamos en nuestro archivo punto de entrada

// invocamos React en este documento
import React from 'react';
// invocamos a React Dom
import ReactDom from 'react-dom';
// importamos nuestro componente que acabamos de crear
import App from './components/App';
// importamos nuestro componente de Sass
import './styles/global.scss';

// necesitamos crear un recurso para decir hacia donde nuestra aplicación se va importar
// para mostrar en un archivo HTML nuestra aplicación
ReactDom.render(<App />, document.getElementById('app'));