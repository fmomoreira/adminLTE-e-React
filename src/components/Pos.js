import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";

async function getmodeloPos() {
  let response = await fetch("https://api-smartantecipa.herokuapp.com/modelopos");
  let data = await response.json();
  return data;
}

const Pos = (props) => {
  const [modelopos, setModeloPos] = useState([]);
  useEffect(() => {
    getmodeloPos().then((data) => {
      setModeloPos(data);
    });
  }, []);
  let linkeditModeloPos = "/editarpos?codigo=";
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <Link
                to="/"
                className="btn btn-flat btn-danger  active buttonMecPock zoom"
                role="button"
                aria-pressed="true"
              >
                Voltar
              </Link>
              <Link
                to="/adicionarPos"
                className="btn btn-flat btn-salvar  active ml-2 buttonMecPock zoom"
                role="button"
                aria-pressed="true"
              >
                Adicionar
              </Link>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <p>Home</p>
                </li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Listar modelos POS</h3>
                </div>

                <div className="card-body">
                  <table
                    id="todosFabricantes"
                    className="table table-striped table-sm table-hover"
                  >
                    <thead>
                      <tr>
                        <th width="35%">Modelo</th>
                        <th width="55%">Fabricante</th>
                        <th width="5%">Status</th>
                        <th width="5%">Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelopos.map((modeloPos) => (
                        <tr>
                          <td>{modeloPos.nome}</td>
                          <td>{modeloPos.fabricantePos}</td>
                          <td>
                            <i
                              className="pi pi-power-off"
                              style={{ color: "green", padding: "10px 21px" }}
                            ></i>
                          </td>
                          <td>
                            <Link
                              to={linkeditModeloPos + modeloPos.codigo}
                              id="edit"
                            >
                              <i
                                className="pi pi-user-edit"
                                style={{ color: "grey", padding: "10px 21px" }}
                              ></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pos;
