import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Formik, Field, Form } from "formik";
import schema from "../../schema/schemaAtividade";

function mostrarGenero() {
  return getRadioValor("iconiescolhido");
}

function getRadioValor(name) {
  var rads = document.getElementsByName(name);

  for (var i = 0; i < rads.length; i++) {
    if (rads[i].checked) {
      return rads[i].value;
    }
  }

  return null;
}

export default function formCategoria(props) {
  function onSubmit(values, actions, schema) {
    var nomeAtividade = document.getElementById("descricao").value;
    const iconSelected = mostrarGenero();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      descricao: nomeAtividade,
      iconAtividade: iconSelected,
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
    fetch("https://api-smartantecipa.herokuapp.com/atividade", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        document.querySelector("#formulariAtividade").reset();
        swal({
          title: "Cadastro Realizado",
          text: "nova atividade adicionada",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
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
                    descricao: "",
                  }}
                  render={({ values, errors, touched }) => (
                    <Form id="formulariAtividade">
                      <div className="card-body">
                        <div className="row">
                          <div className="form-group col-12 col-sm-12 col-md-4">
                            <label htmlFor="nome">Nome da Atividade</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="descricao"
                              name="descricao"
                            />
                            {errors.descricao && touched.descricao && (
                              <div class="campo-obrigatorio">
                                {errors.descricao}
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className="card-footer d-flex justify-content-end"
                          style={{ width: "100%", backgroundColor: "#ffffff" }}
                        >
                          <Link
                            to={props.linkAddVoltar}
                            className="btn btn-flat btn-danger  active buttonMecPock zoom"
                            role="button"
                            aria-pressed="true"
                          >
                            Voltar
                          </Link>
                          <button
                            type="submit"
                            className="btn btn-flat btn-salvar  buttonMecPock zoom"
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
}
