import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Formik, Field, Form } from "formik";
import schema from "../../schema/schemaPos";

async function getFabricantes() {
  let response = await fetch("https://api-smartantecipa.herokuapp.com/fabricantepos");
  let data = await response.json();
  return data;
}

const FormPos = (props) => {
  const [fabricantes, setFabricantes] = useState([]);

  useEffect(() => {
    getFabricantes().then((data) => {
      setFabricantes(data);
    });
  }, []);

  function onSubmit(values, actions, schema) {
    var fabricantePos = document.getElementById("fabricantePos").value;
    var nomeModelo = document.getElementById("nome").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nome: nomeModelo,
      fabricantePos: fabricantePos,
      ativo: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    swal({
      text: "Aguarde...",
    });
    fetch("https://api-smartantecipa.herokuapp.com/modelopos", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        document.querySelector("#formulariPos").reset();
        swal({
          title: "Cadastro Realizado",
          text: props.messageSuceess,
          icon: "success",
        });
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Fragment>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-title-mecpock">
                <div className="card-header">
                  <h3 className="card-title">{props.tituloAdicionar}</h3>
                </div>

                <Formik
                  validationSchema={schema}
                  onSubmit={onSubmit}
                  validateOnMount
                  initialValues={{
                    nome: "",
                    fabricantePos: "",
                  }}
                  render={({ values, errors, touched }) => (
                    <Form id="formulariPos">
                      <div className="card-body">
                        <div className="row">
                          <div className="form-group col-md-4">
                            <label htmlFor="nome">Nome Modelo</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="nome"
                              name="nome"
                            />
                            {errors.nome && touched.nome && (
                              <div class="campo-obrigatorio">{errors.nome}</div>
                            )}
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="fabricante">Adquirente</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="fabricantePos"
                              name="fabricantePos"
                              as="select"
                            >
                              <option value="">
                                Selecione um adquirente...
                              </option>
                              {fabricantes.map((fabricante) => (
                                <option value={fabricante.codigo}>
                                  {fabricante.nome}
                                </option>
                              ))}
                            </Field>
                            {errors.fabricantePos && touched.fabricantePos && (
                              <div class="campo-obrigatorio">
                                {errors.fabricantePos}
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="card-footer d-flex justify-content-end"
                          style={{ width: "100%", backgroundColor: "#ffffff" }}
                        >
                          <Link
                            to="/maquinaspos"
                            className="btn btn-flat btn-danger  active buttonMecPock zoom"
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
    </Fragment>
  );
};

export default FormPos;
