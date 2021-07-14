import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";

async function getAtividades() {
  let response = await fetch(
    "https://api-smartantecipa.herokuapp.com/atividade"
  );
  let data = await response.json();
  return data;
}

const Atividade = (props) => {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    getAtividades().then((data) => {
      setAtividades(data);
    });
  }, []);

  let linkeditAtividade = "/editaratividade?codigo=";

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
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
                to="/adicionaratividade"
                className="btn btn-flat btn-salvar  active ml-2 buttonMecPock zoom"
                role="button"
                aria-pressed="true"
              >
                Adicionar
              </Link>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {/*
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">DataTables</li>
          */}
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Listar Atividades</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  {/* table-striped*/}
                  <table
                    id="todosFabricantes"
                    className="table table-striped table-sm table-hover"
                  >
                    <thead>
                      <tr>
                        <th className="col">Descrição</th>

                        <th className="col">Editar</th>
                      </tr>
                    </thead>

                    <tbody id="tabelaAtividade">
                      {atividades.map((atividade, index) => (
                        <tr id="itemtable">
                          <td key={index}>{atividade.descricao}</td>
                          <td>
                            <Link
                              to={linkeditAtividade + atividade.codigo}
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
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default Atividade;
