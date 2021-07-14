import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";

async function getTransacoes() {
  let response = await fetch(
    "https://raw.githubusercontent.com/fmomoreira/Mecpock/master/src/json/transacoes.json"
  );
  let data = await response.json();
  return data;
}

const Movimentacao = (props) => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    getTransacoes().then((data) => {
      setTransacoes(data);
    });
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6"></div>
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
                  <h3 className="card-title">Todas Transações</h3>
                </div>

                <div className="card-body">
                  <table
                    id="todosFabricantes"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Empresa</th>
                        <th>Tipo</th>
                        <th>Parcelas</th>
                        <th>R$ Valor total</th>
                        <th>R$ Pagseguro</th>
                        <th>R$ MecPock</th>
                        <th>R$ Líquido</th>
                        <th>Validação</th>
                        <th>Detalhes</th>
                      </tr>
                    </thead>

                    <tbody id="tabelaEstabelecimento">
                      {transacoes.map((transacao) => (
                        <tr id="transações table">
                          <td>{transacao.data}</td>
                          <td>{transacao.empresa}</td>
                          <td>{transacao.tipo}</td>
                          <td>{transacao.parcelas}</td>
                          <td>{transacao.valortotal}</td>
                          <td>{transacao.valorpagseguro}</td>
                          <td>{transacao.valormecpock}</td>
                          <td>{transacao.valorliquido}</td>
                          <td id="divergenciaValor">{transacao.status}</td>
                          <td>
                            <i
                              className="pi pi-ellipsis-v"
                              style={{ color: "grey", padding: "10px 21px" }}
                            ></i>
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

export default Movimentacao;
