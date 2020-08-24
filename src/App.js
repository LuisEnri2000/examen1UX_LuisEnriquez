import React, {useState} from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Helmet} from 'react-helmet';

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

  printActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  terminarActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  printInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  terminarInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var cont = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {

      if (dato.id == registro.id) {
        arreglo[cont].apunte = dato.apunte;
        arreglo[cont].fecha = dato.fecha;
        arreglo[cont].tags = dato.tags;
      }
      cont++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Confirme que quiere eliminar el dato "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (

      <>

        

        <div className="application">
        <Helmet>
            <title>{'Examen de UX'}</title>
            <style>{'body { background-color: #FEFF46; }'}</style>      
        </Helmet>
        </div>

        <div class="text-center" >
          <h1 class="display-4">Tus apuntes</h1>
          <p> Examen de UX - Luis Enriquez </p>
        </div>



        <Container>
        <br />
          <div class="text-center" >
          <Button color="info" onClick={()=>this.printInsertar()}>Crea un nuevo apunte</Button>
          </div>
          <br />
          <br />
          <div class="table-responsive">
          <Table>
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Apunte</th>
                <th>Fecha</th>
                <th>Tags</th>
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.apunte}</td>
                  <td>{dato.fecha}</td>
                  <td>{dato.tags}</td>
                  <td>
                    <Button
                      color="info"
                      onClick={() => this.printActualizar(dato)}
                    >
                      Modificar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Borrar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </Container>


        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar apunte:</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apunte: 
              </label>
              <input
                className="form-control"
                name="apunte"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apunte}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Tags: 
              </label>
              <input
                className="form-control"
                name="tags"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tags}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.terminarActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Nuevo apunte:</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                ID: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apunte: 
              </label>
              <input
                className="form-control"
                name="apunte"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Tags: 
              </label>
              <input
                className="form-control"
                name="tags"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.terminarInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
