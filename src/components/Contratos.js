import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";

async function getContratos() {
  let response = await fetch(
    "https://raw.githubusercontent.com/fmomoreira/rotas/main/rotaContrato.json"
  );
  let data = await response.json();
  return data;
}

const Contratos = (props) => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    getContratos().then((data) => {
      setContratos(data);
    });
  }, []);

  let linkEditarContrato = "/editarcontrato?codigo=";
  let linkVerContrato = "/vercontrato?codigo=";

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
                to="/adicionarcontrato"
                className="btn btn-flat btn-salvar active ml-2 buttonMecPock zoom"
                role="button"
                aria-pressed="true"
              >
                <i class="fas fa-plus-circle mr-3"></i>Novo Contrato
              </Link>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
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
                  <h3 className="card-title">Listar Contratos</h3>
                </div>

                <div className="card-body">
                  <table
                    id="todosFabricantes"
                    className="table table-striped table-sm table-hover"
                  >
                    <thead>
                      <tr>
                        <th className="col" style={{ width: "40%" }}>
                          Nome{" "}
                        </th>
                        <th className="col" style={{ width: "40%" }}>
                          Ativo{" "}
                        </th>
                        <th className="col" style={{ width: "15%" }}>
                          Vigência
                        </th>
                        <th className="col" style={{ width: "15%" }}>
                          Vencimento
                        </th>
                        <th className="col" style={{ width: "5%" }}>
                          Visualizar
                        </th>
                        <th className="col" style={{ width: "5%" }}>
                          Editar
                        </th>
                      </tr>
                    </thead>

                    <tbody id="tabelaAtividade">
                      {contratos.map((contrato, index) => (
                        <tr id="itemtable">
                          <td key={index}>{contrato.nome}</td>
                          <td key={index}>{contrato.status}</td>
                          <td key={index}>{contrato.dataVigencia}</td>
                          <td key={index}>{contrato.dataValidade}</td>
                          <td>
                            <Link to={linkVerContrato + contrato.id} id="edit">
                              <i
                                className="pi pi-eye"
                                style={{ color: "grey", padding: "10px 21px" }}
                              ></i>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={linkEditarContrato + contrato.id}
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

export default Contratos;
