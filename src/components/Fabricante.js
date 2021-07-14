import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "primeicons/primeicons.css";
import swal from "sweetalert";
import schema from "./schema/schemaadquirente";

const Fabricante = () => {
  const [fabricantes, setFabricantes] = useState([]);
  const [carregarAdquirente, setCarregarAdquirente] = useState(true);

  useEffect(() => {
    async function getFabricantes() {
      let response = await fetch(
        "https://api-smartantecipa.herokuapp.com/fabricantepos"
      );
      let data = await response.json();
      return data.reverse();
    }
    getFabricantes().then((data) => {
      setFabricantes(data);
    });
    if (carregarAdquirente) {
      setCarregarAdquirente(false);
    }
  }, [carregarAdquirente]);

  let linkeditfabricante = "/editaradquirente?codigo=";

  function onSubmit(values, actions, schema) {
    //console.log("O nome cadastrado é "+ values.name + "o email cadastrado é: "+ values.email);
    let nomefabricante = document.getElementById("nome").value;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ nome: nomefabricante, ativo: true });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    swal({
      text: "Aguarde...",
    });
    fetch("https://api-smartantecipa.herokuapp.com/fabricantepos", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        document.querySelector("#formulariFabricante").reset();
        swal({
          title: "Cadastro Realizado",
          text: "Adquirente adicionado com Sucesso",
          icon: "success",
        });
        setCarregarAdquirente(true);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <Fragment>
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
              <div className="col-md-12">
                <div className="card card-title-mecpock">
                  <div className="card-header">
                    <h3 className="card-title">Adicionar Aquirente</h3>
                  </div>

                  <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    validateOnMount
                    initialValues={{
                      nome: "",
                    }}
                    render={({ values, errors, touched }) => (
                      <Form id="formulariFabricante">
                        <div className="card-body">
                          <div className="row">
                            <div className="form-group col-md-4">
                              <label htmlFor="nome">Nome do Adquirente</label>
                              <Field
                                className="form-control inputMecpock"
                                name="nome"
                                type="text"
                                id="nome"
                              />
                              {errors.nome && touched.nome && (
                                <div class="campo-obrigatorio">
                                  {errors.nome}
                                </div>
                              )}
                            </div>
                          </div>
                          <div
                            className="card-footer d-flex justify-content-end"
                            style={{
                              width: "100%",
                              backgroundColor: "#ffffff",
                            }}
                          >
                            <Link
                              to="/adquirente"
                              className="btn btn-flat btn-danger  active  zoom"
                              role="button"
                              aria-pressed="true"
                            >
                              Voltar
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-flat btn-salvar buttonMecPock zoom"
                              style={{ marginLeft: "1rem" }}
                            >
                              Salvar{" "}
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-title-mecpock-subtitle">
                  <div className="card-header">
                    <h3 className="card-title">Listar Adquirente</h3>
                  </div>

                  <div className="card-body">
                    <table
                      id="dataTable"
                      className="table table-striped table-sm table-hover"
                    >
                      <thead>
                        <tr>
                          <th className="col">Nome</th>
                          <th className="col">Status</th>
                          <th className="col">Editar</th>
                        </tr>
                      </thead>
                      <tbody id="tabelaFrabricante">
                        {fabricantes.map((fabricante, index) => (
                          <tr key={index} id="tabelaFabricante">
                            <td id="nomeFabricante">{fabricante.nome}</td>
                            <td>
                              <i
                                className="pi pi-power-off"
                                style={{ color: "green", padding: "10px 21px" }}
                              ></i>
                            </td>
                            <td>
                              <Link to={linkeditfabricante + fabricante.codigo}>
                                <i
                                  className="pi pi-user-edit"
                                  style={{
                                    color: "grey",
                                    padding: "10px 21px",
                                  }}
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
    </Fragment>
  );
};

export default Fabricante;
