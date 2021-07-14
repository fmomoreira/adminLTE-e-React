import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";

async function getEstabelecimentos() {
  let response = await fetch("https://api-smartantecipa.herokuapp.com/prestador");
  let data = await response.json();
  console.log(data);
  return data;
}

const Estabelecimento = (props) => {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  useEffect(() => {
    getEstabelecimentos().then((data) => {
      setEstabelecimentos(data);
    });
  }, []);

  let linkeditEstabelecimento = "/editarestabelecimento?codigo=";

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
                to="/adicionarEstabelecimento"
                className="btn btn-flat btn-salvar active ml-2 buttonMecPock zoom"
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
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Listar Estabelecimentos</h3>
                </div>

                <div className="card-body">
                  <table
                    id="todosFabricantes"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th width="20%">CNPJ</th>
                        <th>Razão Social</th>
                        <th>Fantasia</th>
                        <th>Inscrição Estadual</th>
                        <th width="5%">Editar</th>
                      </tr>
                    </thead>

                    <tbody id="tabelaEstabelecimento">
                      {estabelecimentos.map((estabelecimento) => (
                        <tr id="itemtable">
                          <td>{estabelecimento.cnpj}</td>
                          <td>{estabelecimento.razaoSocial}</td>
                          <td>{estabelecimento.fantasia}</td>
                          <td>{estabelecimento.inscricaoEstadual}</td>
                          <td>
                            <Link
                              to={
                                linkeditEstabelecimento + estabelecimento.codigo
                              }
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

export default Estabelecimento;
