import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'

const tablaRecia =[
  {apunte:"React es una biblioteca de javascript para construir interfaces de usuario.", fecha:"21/ago/2020 09:31:50", etiquetas:"react, javascript, front-end"},

];

const columnasRecias = [
  {
    name: 'Recio', 
    selector: 'apunte', 
    sortable: true 
  },
  {
    name: 'Fecha', selector: 'fecha', sortable: true 
  },
  {
    name: 'Etiquetas', selector: 'etiquetas', sortable: true
  },
]

function App() {
  return (
    <div className="App">

      <DataTable 
      columns = {columnasRecias}
      data = {tablaRecia}
      title = "Recio"
      />
      

    </div>
  );
}



export default App;
