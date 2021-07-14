import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

async function getAtividadesEdit(id) {
  let response = await fetch(
    `https://api-smartantecipa.herokuapp.com//find/${id}`
  );
  let data = await response.json();
  document.getElementById("editAtividade").value = data.descricao;
}

export default function EditarAtividade(props) {
  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("codigo");
    getAtividadesEdit(id);
  });

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6"></div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Editar atividade</h3>
                </div>

                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group col-md-4">
                        <label htmlFor="nome">Nome da atividade</label>
                        <input
                          type="text"
                          className="form-control "
                          id="editAtividade"
                          name="name"
                          placeholder="Ex: Mecânica"
                          riquered
                        />
                      </div>
                    </div>
                    <div
                      className="card-footer d-flex justify-content-end"
                      style={{ width: "100%", backgroundColor: "#ffffff" }}
                    >
                      <Link
                        to="/atividade"
                        className="btn btn-flat btn-danger  active"
                        role="button"
                        aria-pressed="true"
                      >
                        Voltar
                      </Link>
                      <button
                        type="button"
                        className="btn btn-flat btn-primary  buttonMecPock zoom"
                        style={{ marginLeft: "1rem" }}
                        onClick={() => {
                          var editnameAtividade =
                            document.getElementById("editAtividade").value;
                          var url_string_atividade = window.location.href;
                          var urlatividade = new URL(url_string_atividade);
                          var idatividade =
                            urlatividade.searchParams.get("codigo");
                          console.log(idatividade);

                          var myHeaders = new Headers();
                          myHeaders.append("Content-Type", "application/json");

                          var raw = JSON.stringify({
                            descricao: editnameAtividade,
                          });

                          var requestOptions = {
                            method: "PUT",
                            headers: myHeaders,
                            body: raw,
                            redirect: "follow",
                          };
                          swal({
                            text: "Aguarde...",
                          });
                          fetch(
                            "https://api-smartantecipa.herokuapp.com/edita/" +
                              idatividade,
                            requestOptions
                          )
                            .then((response) => response.text())
                            .then((result) => {
                              console.log(result);
                              document
                                .querySelector("#editAtividade")
                                .setAttribute("value", editnameAtividade);
                              swal({
                                title: "Alteração realizada",
                                text: "Os dados foram alterado com sucesso!",
                                icon: "success",
                              });
                            })
                            .catch((error) => console.log("error", error));
                        }}
                      >
                        Salvar{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
