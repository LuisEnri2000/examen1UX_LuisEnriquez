import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'

const data = [
  { id: 1, apunte: "F=ma", fecha: "22/8/2020", tags: "Formula, Fisica, Fuerza"},
  { id: 2, apunte: "React es una biblioteca de javascript para construir interfaces de usuario.", fecha: "22/8/2020", tags: "react, javascript, front-end"},
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      apunte: "",
      fecha: "",
      tags: "",
    },
  };
}

export default App;
